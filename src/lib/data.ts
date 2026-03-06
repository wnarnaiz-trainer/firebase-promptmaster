import { 
  Megaphone, 
  Code2, 
  Feather, 
  ScrollText, 
  Users, 
  Briefcase, 
  BarChart2, 
  Lightbulb, 
  Shield, 
  GraduationCap,
  Truck,
  Factory,
  TrendingUp,
  Wallet,
  Settings
} from 'lucide-react';
import type { Persona, Challenge } from './types';

export const personas: Persona[] = [
  {
    id: 'marketing-guru',
    name: 'Marketing Guru',
    description: 'Craft compelling campaigns and slogans.',
    icon: Megaphone,
  },
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    description: 'Solve complex coding problems and design systems.',
    icon: Code2,
  },
  {
    id: 'creative-writer',
    name: 'Creative Writer',
    description: 'Weave enchanting stories and characters.',
    icon: Feather,
  },
  {
    id: 'historian',
    name: 'Historian',
    description: 'Analyze past events and uncover hidden truths.',
    icon: ScrollText,
  },
  {
    id: 'hr-manager',
    name: 'HR Manager',
    description: 'Write job descriptions and manage employee relations.',
    icon: Users,
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    description: 'Plan projects, create timelines, and assign tasks.',
    icon: Briefcase,
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    description: 'Interpret data, identify trends, and create reports.',
    icon: BarChart2,
  },
  {
    id: 'business-analyst',
    name: 'Business Analyst',
    description: 'Analyze processes and recommend improvements.',
    icon: Lightbulb,
  },
  {
    id: 'cybersecurity-expert',
    name: 'Cybersecurity Expert',
    description: 'Identify threats and create security policies.',
    icon: Shield,
  },
  {
    id: 'learning-development',
    name: 'Learning & Development',
    description: 'Design training programs and create learning materials.',
    icon: GraduationCap,
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Manager',
    description: 'Optimize logistics, inventory, and vendor relations.',
    icon: Truck,
  },
  {
    id: 'food-plant-ops',
    name: 'Food Plant Operations',
    description: 'Ensure safety, quality, and efficiency in production.',
    icon: Factory,
  },
  {
    id: 'sales-pro',
    name: 'Sales Professional',
    description: 'Close deals, handle objections, and grow revenue.',
    icon: TrendingUp,
  },
  {
    id: 'finance-analyst',
    name: 'Finance Analyst',
    description: 'Manage budgets, analyze P&L, and forecast growth.',
    icon: Wallet,
  },
  {
    id: 'maintenance-engineer',
    name: 'Engineering & Maintenance',
    description: 'Maintain equipment and solve technical failures.',
    icon: Settings,
  },
];

export const challenges: Challenge[] = [
  // Marketing Guru Challenges
  {
    personaId: 'marketing-guru',
    challengeId: 1,
    title: 'Craft a prompt for a catchy tagline and ad copy for a new eco-friendly water bottle.',
    scenario: "AquaPure is launching 'EarthBottle,' a plant-based, compostable water bottle. Targeting millennials on social media with a tight budget. Need a powerful message for pre-orders.",
  },
  {
    personaId: 'marketing-guru',
    challengeId: 2,
    title: 'Define a brand voice and brainstorm a launch event for a coffee shop rebranding.',
    scenario: "'The Daily Grind' is moving from traditional to modern/community-focused to attract young professionals without losing old regulars.",
  },

  // Software Engineer Challenges
  {
    personaId: 'software-engineer',
    challengeId: 1,
    title: 'Generate clear documentation for an open-source library function.',
    scenario: "You lead a small team. Manual documentation is slow. You need high-quality auto-generated docs for function signatures to help adoption.",
  },

  // Learning & Development Challenges
  {
    personaId: 'learning-development',
    challengeId: 1,
    title: 'Generate an outline for a "Conflict Resolution" workshop for new leads.',
    scenario: "Several departments report increased friction during sprint planning. You need a 2-hour interactive session to teach de-escalation skills.",
  },
  {
    personaId: 'learning-development',
    challengeId: 2,
    title: 'Draft an e-learning script for "Safe Food Handling" standards.',
    scenario: "New compliance regulations are in place. You need a 5-minute engaging video script for plant workers to ensure zero cross-contamination.",
  },

  // Supply Chain Manager Challenges
  {
    personaId: 'supply-chain',
    challengeId: 1,
    title: 'Create a prompt to optimize delivery routes during a fuel price surge.',
    scenario: "Your logistics fleet is seeing a 20% increase in operational costs. You need an AI to analyze current routes and suggest consolidations to minimize mileage while maintaining SLA.",
  },
  {
    personaId: 'supply-chain',
    challengeId: 2,
    title: 'Draft a message to suppliers regarding a critical component shortage.',
    scenario: "A global semiconductor shortage has halted your production line. You need to negotiate priority with three different vendors who are all over-capacity.",
  },
  {
    personaId: 'supply-chain',
    challengeId: 3,
    title: 'Build a prompt for inventory forecasting for the holiday season.',
    scenario: "Last year you overstocked by 15%. This year, demand signals are mixed. You need a structured approach to balance stock levels vs. warehouse capacity.",
  },

  // Food Plant Operations Challenges
  {
    personaId: 'food-plant-ops',
    challengeId: 1,
    title: 'Develop a safety protocol prompt for a high-speed bottling line.',
    scenario: "A recent 'near-miss' accident occurred during a jam. You need a clear, step-by-step safety manual for operators to handle machine errors without risk of injury.",
  },
  {
    personaId: 'food-plant-ops',
    challengeId: 2,
    title: 'Craft a prompt to minimize raw material waste in a bakery production.',
    scenario: "Flour and sugar waste is up by 8% this month. You need a root-cause analysis prompt to identify if it's due to machine calibration or operator error.",
  },
  {
    personaId: 'food-plant-ops',
    challengeId: 3,
    title: 'Write a prompt to prepare for a sudden BRCGS quality audit.',
    scenario: "The auditor is arriving in 24 hours. You need a comprehensive checklist to ensure all documentation, CCP logs, and floor sanitation meet Grade A standards.",
  },

  // Sales Professional Challenges
  {
    personaId: 'sales-pro',
    challengeId: 1,
    title: 'Create a cold outreach prompt for a 'whale' client in the tech sector.',
    scenario: "You have one shot at a meeting with a Fortune 500 CTO. The prompt should generate a message that focuses on their specific pain point: data latency.",
  },
  {
    personaId: 'sales-pro',
    challengeId: 2,
    title: 'Draft a prompt to handle the "Your price is too high" objection.',
    scenario: "A long-term prospect is ready to sign but is hesitating because a cheaper competitor just pitched them. You need a value-driven response.",
  },
  {
    personaId: 'sales-pro',
    challengeId: 3,
    title: 'Generate a script for a follow-up call after a major trade show.',
    scenario: "You collected 50 leads at a manufacturing expo. You need an AI to categorize them and write personalized follow-up scripts for the 'Hot' prospects.",
  },

  // Finance Analyst Challenges
  {
    personaId: 'finance-analyst',
    challengeId: 1,
    title: 'Analyze a quarterly P&L to find 5 specific cost-saving opportunities.',
    scenario: "Operational expenses are up, but revenue is flat. You need a prompt that asks the AI to dig into line items like travel and utilities to find low-impact cuts.",
  },
  {
    personaId: 'finance-analyst',
    challengeId: 2,
    title: 'Create a prompt for a CAPEX investment justification for a new freezer.',
    scenario: "The old freezer is costing $2k/month in repairs. A new one costs $50k but saves 30% on energy. You need a persuasive memo for the Board.",
  },
  {
    personaId: 'finance-analyst',
    challengeId: 3,
    title: 'Draft an explanation of currency fluctuation impact for global stakeholders.',
    scenario: "The strengthening USD is hurting export margins in Europe. You need a clear summary for non-finance managers explaining the 'why' and the 'what now'.",
  },

  // Engineering & Maintenance Challenges
  {
    personaId: 'maintenance-engineer',
    challengeId: 1,
    title: 'Build a preventive maintenance schedule prompt for an aging steam boiler.',
    scenario: "The boiler is 15 years old. Frequent small leaks are causing downtime. You need a rigorous daily/weekly/monthly check routine to prevent a catastrophic failure.",
  },
  {
    personaId: 'maintenance-engineer',
    challengeId: 2,
    title: 'Craft a prompt for a Root Cause Analysis (RCA) of a conveyor belt motor failure.',
    scenario: "The main packing line motor burned out twice in one week. You need a structured prompt to investigate if it's electrical surge, mechanical load, or bearing failure.",
  },
  {
    personaId: 'maintenance-engineer',
    challengeId: 3,
    title: 'Draft a "Lockout/Tagout" (LOTO) training guide for new technical hires.',
    scenario: "Safety compliance is non-negotiable. You need a prompt that generates a clear, visual-heavy guide on how to isolate power before entering a palletizer.",
  },
];
