'use server';

import {scorePrompt} from '@/ai/flows/score-prompt';
import {z} from 'zod';
import type {ScorePromptOutput} from './types';

const promptSchema = z.object({
  prompt: z.string(),
  userId: z.string(),
  screenName: z.string(),
  scenario: z.string(),
  task: z.string(),
});

export async function submitPrompt(
  data: z.infer<typeof promptSchema>
): Promise<{success: boolean; data?: ScorePromptOutput; error?: string}> {
  try {
    const result = await scorePrompt({prompt: data.prompt, scenario: data.scenario, task: data.task});
    return {success: true, data: result};
  } catch (error) {
    console.error('Error scoring prompt:', error);
    return {
      success: false,
      error: 'An unexpected error occurred while scoring the prompt.',
    };
  }
}
