// This file uses server-side code.
'use server';

/**
 * @fileOverview This file contains the Genkit flow for scoring a prompt based on format and effectiveness.
 *
 * - scorePrompt - A function that takes a prompt as input and returns a score with feedback.
 * - ScorePromptInput - The input type for the scorePrompt function.
 * - ScorePromptOutput - The return type for the scorePrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScorePromptInputSchema = z.object({
  prompt: z.string().describe('The prompt to be scored.'),
  scenario: z.string().describe("The scenario of the challenge."),
  task: z.string().describe("The task of the challenge."),
});

export type ScorePromptInput = z.infer<typeof ScorePromptInputSchema>;

const ScorePromptOutputSchema = z.object({
  personaScore: z.number().describe('The score for the Persona component of the prompt (0-100).'),
  contextScore: z.number().describe('The score for the Context component of the prompt (0-100).'),
  taskScore: z.number().describe('The score for the Task component of the prompt (0-100).'),
  formatScore: z.number().describe('The score for the Format component of the prompt (0-100).'),
  overallScore: z.number().describe('The overall score of the prompt (0-100), which is an average of the other scores.'),
  feedback: z.string().describe('Feedback on how to improve the prompt.'),
  recommendedStructure: z.string().describe('Recommended prompt structure for improvement.'),
});


export type ScorePromptOutput = z.infer<typeof ScorePromptOutputSchema>;

export async function scorePrompt(
  input: ScorePromptInput
): Promise<ScorePromptOutput> {
  return scorePromptFlow(input);
}

const scorePromptPrompt = ai.definePrompt({
  name: 'scorePromptPrompt',
  input: {schema: ScorePromptInputSchema},
  output: {schema: ScorePromptOutputSchema},
  prompt: `You are an AI prompt engineering expert. Your task is to evaluate a user's submitted prompt based on its relevance to a given challenge and its structural quality according to the PCTF (Persona, Context, Task, Format) framework.

**1. The Challenge Context**
First, understand the challenge the user was given:
- **Story/Scenario**: {{{scenario}}}
- **Assigned Task**: {{{task}}}

**2. The User's Submission**
Now, carefully analyze the following user-submitted prompt:
- **User's Prompt**: {{{prompt}}}

**3. Evaluation Steps**

**Step A: Relevance Check (Crucial First Step)**
- Compare the user's prompt to the story and assigned task.
- Ask: "Is the user's prompt genuinely trying to solve the assigned task?"
- If NO, the prompt is irrelevant. All scores MUST be 0. The feedback MUST clearly state that the prompt was not relevant to the challenge, which is why the score is zero.
- If YES, proceed to Step B.

**Step B: PCTF Scoring (Only if Relevant)**
Evaluate the prompt's content for each of the four criteria. Do NOT just look for the words "Persona", "Context", "Task", or "Format". Instead, analyze if the user has effectively *defined* these components, regardless of the words they used.

- **Persona Score (0-100)**:
  - Does the prompt establish a clear role or character for the AI?
  - Is the persona's expertise relevant and helpful for the assigned task? (e.g., "You are a world-class chef" is a strong persona for a recipe task).
  - A simple "You are an AI" is a very weak persona. Score based on the detail and relevance of the defined persona.

- **Context Score (0-100)**:
  - Does the prompt provide sufficient background information, data, or the situation for the AI to work with?
  - Is the context detailed enough to prevent ambiguity and guide the AI toward a relevant response?
  - Simply mentioning the scenario is not enough; the prompt should incorporate or reference the key contextual details.

- **Task Score (0-100)**:
  - How clear, specific, and actionable is the task given to the AI?
  - Is it obvious what the AI is supposed to *do* and what the desired output should accomplish?
  - Vague commands like "do something about this" should score very low. A strong task is explicit and well-defined.

- **Format Score (0-100)**:
  - Does the prompt specify the desired structure or format of the output?
  - Examples of good formatting instructions include "in a JSON format", "as a bulleted list", "in a 3-paragraph summary", "as a markdown table".
  - If no format is specified, the score should be low. The more specific the formatting instruction, the higher the score.

**Step C: Final Output**
Based on your analysis, provide the following:
1.  **Scores**: The four individual scores and an Overall Score (which MUST be the average of the four). If the prompt was irrelevant, all scores must be 0.
2.  **Constructive Feedback**: If irrelevant, state that as the reason for the zero score. Otherwise, provide specific feedback on how to improve each of the PCTF components.
3.  **Recommended Structure**: Provide a clear, recommended prompt structure that the user could follow for future improvement.

Output your final response in JSON format.
`,
});

const scorePromptFlow = ai.defineFlow(
  {
    name: 'scorePromptFlow',
    inputSchema: ScorePromptInputSchema,
    outputSchema: ScorePromptOutputSchema,
  },
  async (input) => {
    const {output} = await scorePromptPrompt(input);
    return output!;
  }
);
