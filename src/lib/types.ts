import type { ComponentType } from 'react';

export type Persona = {
  id: string;
  name: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export type Challenge = {
  personaId: string;
  challengeId: number;
  title: string;
  scenario: string;
};

export type SubmittedPrompt = {
  personaId: string;
  challengeId: number;
  prompt: string;
  score: number;
};

export type ScorePromptOutput = {
  personaScore: number;
  contextScore: number;
  taskScore: number;
  formatScore: number;
  overallScore: number;
  feedback: string;
  recommendedStructure: string;
};
