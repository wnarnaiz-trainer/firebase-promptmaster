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
  prompt: `You are an AI prompt scoring expert. Your task is to evaluate a user's prompt based on its relevance to the given challenge and its structure.

First, here is the challenge the user was given:
- **Story/Scenario**: {{{scenario}}}
- **Assigned Task**: {{{task}}}

Now, evaluate the following user-submitted prompt:
- **User's Prompt**: {{{prompt}}}

**Crucial First Step: Relevance Check**
1.  Read the user's prompt carefully.
2.  Compare it to the **Story/Scenario** and the **Assigned Task**.
3.  Ask yourself: "Is the user's prompt attempting to solve the assigned task?"

-   **If NO**, the prompt is irrelevant. The scoring is automatically zero for all categories. In the feedback, you MUST explain that the prompt was not relevant to the challenge and that is why the score is zero.
-   **If YES**, proceed to the scoring section below.

**Scoring Guidelines (only if relevant)**
If the prompt is relevant, evaluate it based on four key criteria: Persona, Context, Task, and Format. For each criterion, provide a score from 0 to 100. Then, calculate an Overall Score, which should be the average of the four individual scores.

- **Persona Score**: How well is the persona defined in the user's prompt? Is it a clear role with relevant expertise for the task? (e.g., "You are a world-class chef" vs. "You are a person").
- **Context Score**: How well does the prompt set the scene and provide necessary background information? Is the situation clear?
- **Task Score**: How clear, specific, and actionable is the task in the prompt? Is it obvious what the AI needs to do?
- **Format Score**: Does the prompt specify the desired output format? (e.g., "in a JSON format", "as a bulleted list", "in a 3-paragraph summary").

**Output Requirements**
After scoring, provide:
1.  An **Overall Score**. If the prompt is irrelevant, this MUST be 0. Otherwise, it is the average of the four scores.
2.  Constructive **Feedback**. If the score is 0 due to irrelevance, the feedback must state this clearly as the reason. Otherwise, provide feedback on how to improve the prompt.
3.  A **Recommended Structure** that the user can follow to build better prompts in the future.

Output in JSON format.
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
