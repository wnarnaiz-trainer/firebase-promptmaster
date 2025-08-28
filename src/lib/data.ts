import { Megaphone, Code2, Feather, ScrollText, Users, Briefcase, BarChart2, Lightbulb, Shield } from 'lucide-react';
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
];

export const challenges: Challenge[] = [
  // Marketing Guru Challenges
  {
    personaId: 'marketing-guru',
    challengeId: 1,
    title: 'Your task is to craft a prompt that generates a catchy tagline and a short social media ad copy for a new, eco-friendly water bottle.',
    scenario: "AquaPure, an innovative startup, is on the verge of launching 'EarthBottle,' the world's first fully plant-based, compostable water bottle. They're targeting environmentally aware millennials on social media, but their marketing budget is tight. They need a powerful message that resonates instantly and drives pre-orders. A great prompt should ask the AI to consider the target audience and the product's unique selling points to create marketing copy that is both impactful and persuasive.",
  },
  {
    personaId: 'marketing-guru',
    challengeId: 2,
    title: 'Your task is to craft a prompt that asks an AI to define a new, modern brand voice and brainstorm ideas for a launch event for a coffee shop looking to rebrand.',
    scenario: "'The Daily Grind' has been a beloved neighborhood coffee spot for 20 years, known for its quiet, traditional atmosphere. However, with a new co-working space opening across the street, the owner sees an opportunity to attract a younger, professional clientele. They want to rebrand with a more modern, vibrant, and community-focused identity without alienating their loyal customers. Your prompt should guide the AI to suggest a brand voice that feels authentic and event ideas that are both creative and feasible.",
  },
  // Software Engineer Challenges
  {
    personaId: 'software-engineer',
    challengeId: 1,
    title: 'Your task is to craft a prompt for an AI that takes a function signature and generates clear, concise documentation for it, including parameters, return value, and a code example.',
    scenario: "You're leading a team developing a new open-source library. To ensure its adoption, the documentation must be impeccable. However, the team is small, and writing detailed documentation for every function is slowing down development. You need a way to automate the creation of high-quality documentation to keep the project on track. The prompt should specify the exact format and level of detail required for the documentation.",
  },
  {
    personaId: 'software-engineer',
    challengeId: 2,
    title: 'You are given a buggy Python function. Your task is to craft a prompt that explains the problem and asks an AI to identify the bug and suggest a specific code fix.',
    scenario: 'A critical bug has been reported in your application\'s data processing pipeline. A Python function designed to sort a list of transaction IDs (which can be a mix of numbers and alphanumeric strings) is failing intermittently, leading to incorrect financial reports. The pressure is on to find and fix the issue before the end of the fiscal quarter. Your prompt needs to provide the buggy code and enough context for the AI to accurately diagnose and solve the problem.',
  },
  // Creative Writer Challenges
  {
    personaId: 'creative-writer',
    challengeId: 1,
    title: 'Your task is to craft a prompt that generates a compelling opening paragraph for a science fiction story about first contact.',
    scenario: 'In the year 2242, Dr. Aris Thorne is the sole inhabitant of the Kepler-186f research outpost, studying alien flora. After months of solitude, he discovers a bioluminescent plant that seems to pulse in response to his movements. He suspects it might be sentient, communicating through patterns of light, a discovery that could change humanity\'s understanding of life in the universe. The prompt should ask the AI to capture the sense of isolation, wonder, and the monumental implications of this discovery in the opening lines.',
  },
  {
    personaId: 'creative-writer',
    challengeId: 2,
    title: 'Your task is to craft a prompt to generate a short, tense, and meaningful dialogue between a knight and a dragon.',
    scenario: 'For centuries, the obsidian dragon Ignis has slumbered in the heart of Mount Cinder, hoarding ancient knowledge. A young, idealistic knight, Lady Elara, has been sent not to slay the beast, but to seek its wisdom to stop a devastating plague. She stands at the entrance of the cavern, her sword sheathed, ready to persuade a creature that has only ever known violence from humankind. The prompt should instruct the AI to write a dialogue that reveals the dragon\'s ancient weariness and the knight\'s desperate hope.',
  },
  // Historian Challenges
  {
    personaId: 'historian',
    challengeId: 1,
    title: 'Your task is to craft a prompt for an AI to generate a detailed, first-person description of the daily life of a merchant in Ancient Rome.',
    scenario: 'For your upcoming book on the commerce of the Roman Empire, you want to write a chapter that immerses the reader in the world of a typical olive oil merchant in Rome, circa 79 AD. You need to capture the sensory details of the market, the social interactions, business dealings, and the underlying anxieties of living in a bustling, and often dangerous, ancient metropolis. Your prompt should ask for a narrative that is both historically accurate and personally engaging.',
  },
  {
    personaId: 'historian',
    challengeId: 2,
    title: 'You have found a historical letter. Your task is to craft a prompt that asks an AI to analyze the letter\'s tone, identify key themes, and explain its historical significance.',
    scenario: 'While archiving documents in a university library, you\'ve discovered a previously unknown letter from a field nurse to her family, written just after the Battle of Gettysburg during the American Civil War. The letter seems to contain unique details about medical practices and the emotional state of the soldiers. You need to quickly assess its importance for a potential academic paper. The prompt should guide the AI to perform a multi-faceted analysis of the document\'s content and context.',
  },
  // HR Manager Challenges
  {
    personaId: 'hr-manager',
    challengeId: 1,
    title: 'Your task is to craft a prompt to generate a comprehensive and appealing job description for a Senior UX Designer that will attract top-tier talent in a competitive market.',
    scenario: 'Your tech company is launching a new flagship application and needs to hire an exceptional Senior UX Designer. The market is incredibly competitive. You need to write a job description that not only outlines the technical skills and responsibilities but also showcases the company\'s innovative culture and the impactful nature of the project to attract the best of the best. The prompt should specify the key elements that make a job description stand out from the crowd.',
  },
  {
    personaId: 'hr-manager',
    challengeId: 2,
    title: 'Your task is to craft a prompt for an AI to write a welcoming and informative onboarding email that clearly outlines a new remote employee\'s first-day schedule.',
    scenario: 'A new software developer is joining your remote-first company next Monday. It\'s crucial that their onboarding experience is smooth and makes them feel like part of the team from day one. You need to draft a warm, welcoming email that provides a clear schedule for their first day, including virtual meet-and-greets, system setup sessions, and an introduction to their mentor. The prompt should emphasize the desired tone and the essential information to include.',
  },
  // Project Manager Challenges
  {
    personaId: 'project-manager',
    challengeId: 1,
    title: 'Your task is to craft a prompt to create a detailed agenda for a project kickoff meeting that will align all stakeholders and set the project up for success.',
    scenario: 'You are leading a six-month project to develop a new mobile banking app for a major financial institution. The project involves multiple departments, including development, design, security, and marketing. You need to run a project kickoff meeting that aligns all stakeholders on the project\'s goals, scope, timeline, and communication plan to ensure a successful start. Your prompt should ask the AI to structure an agenda that is both comprehensive and time-efficient.',
  },
  {
    personaId: 'project-manager',
    challengeId: 2,
    title: 'Your task is to craft a prompt that asks an AI to identify potential risks for a critical IT project and suggest specific, actionable mitigation strategies for each risk.',
    scenario: 'You are two months into a critical project to migrate your company\'s entire e-commerce platform to a new cloud provider. The deadline is tight, and a key vendor has just informed you of potential delays in delivering essential hardware. You need to immediately identify all potential risks—technical, logistical, and financial—and develop a robust mitigation plan to present to the steering committee. The prompt should request a structured risk assessment with clear strategies.',
  },
  // Data Analyst Challenges
  {
    personaId: 'data-analyst',
    challengeId: 1,
    title: 'You are given a raw dataset. Your task is to craft a prompt to ask an AI to analyze sales data and summarize the key trends and insights for a quarterly business review.',
    scenario: 'Your retail company just concluded its third quarter. You have been given a raw dataset containing all sales transactions from the last three years. Your CEO needs a high-level summary of performance for the latest quarter, including key trends, top-performing product categories, and any surprising anomalies compared to previous years, for an upcoming board meeting. Your prompt should ask the AI to act as a data analyst and provide a concise, executive-level summary.',
  },
  {
    personaId: 'data-analyst',
    challengeId: 2,
    title: 'Your task is to craft a prompt to ask an AI to analyze a customer dataset and propose distinct customer segments for a targeted marketing campaign.',
    scenario: 'The marketing team wants to launch a more personalized email campaign to increase customer retention. You have a large dataset containing customer demographics, purchase history, and website interaction data. Your task is to analyze this data and identify distinct customer segments with similar behaviors and preferences, so the marketing team can tailor their messaging effectively. The prompt should define the goal of the segmentation and the types of data available.',
  },
  // Business Analyst Challenges
  {
    personaId: 'business-analyst',
    challengeId: 1,
    title: 'Your task is to craft a prompt for an AI to analyze a described business workflow, identify inefficiencies, and suggest specific, actionable improvements.',
    scenario: 'The customer support team at a rapidly growing SaaS company is overwhelmed. The current process for handling support tickets involves manual triage via email, leading to slow response times and lost tickets. You have been asked to map out the current process and propose a new, more efficient workflow that could involve automation and a new ticketing system. Your prompt should clearly describe the existing workflow and ask for concrete suggestions for improvement.',
  },
  {
    personaId: 'business-analyst',
    challengeId: 2,
    title: 'Your task is to craft a prompt to generate a concise and persuasive summary of your analytical findings for a senior management presentation.',
    scenario: 'After a month of analysis, you have identified several major bottlenecks in your company\'s inventory management process that are costing millions each year. You are scheduled to present your findings to senior management, but you only have five minutes. You need to create a powerful, data-driven summary that clearly explains the problem and the potential ROI of your proposed solutions. The prompt should instruct the AI to create a summary that is suitable for an executive audience.',
  },
  // Cybersecurity Expert Challenges
  {
    personaId: 'cybersecurity-expert',
    challengeId: 1,
    title: 'Your task is to craft a prompt to generate a clear and effective company-wide email about how to spot and report phishing attempts.',
    scenario: 'Your company\'s threat intelligence system has detected a sophisticated spear-phishing campaign targeting employees in the finance department. The emails appear to be from the CFO and ask for urgent wire transfers. You need to immediately send a company-wide alert that is clear, non-alarming, and educates employees on how to identify these malicious emails and report them safely. Your prompt should ask the AI to write an email that is easy for non-technical staff to understand.',
  },
  {
    personaId: 'cybersecurity-expert',
    challengeId: 2,
    title: 'Your task is to craft a prompt for an AI to outline the key, ordered steps of a formal incident response plan for a data breach.',
    scenario: 'Your company has discovered a malware infection on a critical server that hosts customer data. It\'s unclear how deep the breach is or what data has been compromised. As the lead cybersecurity expert, you must immediately initiate the incident response protocol. You need a clear, step-by-step plan that covers containment, eradication, recovery, and post-incident analysis to manage the crisis effectively. The prompt should request a formal plan structure that can be used as a template.',
  },
];
