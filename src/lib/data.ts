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
    scenario: "AquaPure is launching 'EarthBottle,' a revolutionary water bottle made entirely from corn-starch based bioplastics that are 100% home-compostable. The brand's mission is to eliminate single-use plastic in urban environments. You are targeting environmentally conscious Gen Z and Millennials on platforms like TikTok and Instagram. Your budget for the initial launch is tight, so the copy needs to be punchy, highly shareable, and clearly communicate the unique value of 'vanishing' after use without sacrificing durability during use.",
  },
  {
    personaId: 'marketing-guru',
    challengeId: 2,
    title: 'Define a brand voice and brainstorm a launch event for a coffee shop rebranding.',
    scenario: "'The Daily Grind' has been a neighborhood staple for 20 years, known for its mismatched furniture and grumpy but lovable owner. However, three new third-wave coffee chains have opened within a two-block radius. The owner wants to rebrand as 'Grind & Gather,' shifting the focus toward a modern, community-centric 'third space' that attracts young freelancers during the day and hosts local vinyl listening sessions at night. You need to define a voice that honors the shop's history while feeling fresh, sophisticated, and welcoming to the new demographic.",
  },

  // Software Engineer Challenges
  {
    personaId: 'software-engineer',
    challengeId: 1,
    title: 'Generate clear documentation for an open-source library function.',
    scenario: "You are the lead maintainer of 'DataViz-Core,' a popular open-source JavaScript library for reactive data visualization. Your team has just finished a complex new function, `generateScalableHeatmap()`, which handles dynamic coordinate normalization, color-interpolation, and edge-case handling for null values. The codebase is growing fast, and manual documentation is becoming a bottleneck. You need to create a high-quality prompt that can automatically generate JSDoc comments, including specific parameter types, return values, and a practical example of how to handle a 2D array of sparse data.",
  },

  // Learning & Development Challenges
  {
    personaId: 'learning-development',
    challengeId: 1,
    title: 'Generate an outline for a "Conflict Resolution" workshop for new leads.',
    scenario: "Internal surveys at 'TechStream Solutions' show that 40% of first-time engineering leads feel overwhelmed by interpersonal friction during sprint planning. Tensions often flare between frontend and backend teams regarding API specifications. The VP of People has asked you to design a mandatory 2-hour interactive workshop. Your goal is to move past 'corporate speak' and provide actionable frameworks like 'Non-Violent Communication' tailored specifically for technical environments. The outline must include a role-playing exercise based on a real-world tech disagreement.",
  },
  {
    personaId: 'learning-development',
    challengeId: 2,
    title: 'Draft an e-learning script for "Safe Food Handling" standards.',
    scenario: "A recent minor health inspection revealed that newer plant workers are struggling with the 'Three-Sink Method' and temperature logging during peak shifts. You need to produce a 5-minute engaging e-learning video. The workforce is diverse, with many employees having English as a second language. The script needs to be visually descriptive, using simple but authoritative language, and must emphasize the 'Why' behind the rules—showing the direct link between their actions and consumer safety—to ensure it's not just another boring compliance task.",
  },

  // Supply Chain Manager Challenges
  {
    personaId: 'supply-chain',
    challengeId: 1,
    title: 'Create a prompt to optimize delivery routes during a fuel price surge.',
    scenario: "Global fuel prices have surged by 30% in the last quarter, and your 'Last-Mile' delivery fleet is bleeding cash. You manage a fleet of 50 trucks in a sprawling metropolitan area with heavy traffic congestion and unpredictable construction. You have access to three years of historical delivery data, including average stop times and traffic patterns. You need a prompt that instructs an AI to analyze these variables and propose a radical new route consolidation strategy that prioritizes fuel efficiency over raw speed, targeting a 15% reduction in total mileage without violating 24-hour SLAs.",
  },
  {
    personaId: 'supply-chain',
    challengeId: 2,
    title: 'Draft a message to suppliers regarding a critical component shortage.',
    scenario: "A sudden labor strike at a major shipping port has halted the delivery of 'TX-9' microcontrollers, the brain of your flagship smart home controller. Production is scheduled to stop in 48 hours unless you secure an emergency shipment. You have three long-term vendors who are likely also facing shortages. You need to craft a highly strategic message to these partners that leverages your 10-year relationship, offers a flexible payment plan in exchange for priority, and emphasizes the mutual long-term loss if the product launch fails.",
  },

  // Food Plant Operations Challenges
  {
    personaId: 'food-plant-ops',
    challengeId: 1,
    title: 'Develop a safety protocol prompt for a high-speed bottling line.',
    scenario: "The 'Mark IV' bottling line at your beverage plant runs at a staggering 600 bottles per minute. Last week, a 'near-miss' occurred when an operator reached into a moving conveyor to clear a glass jam without engaging the emergency stop. The workforce is currently on edge. You need to develop a new, iron-clad 'Jam Intervention Protocol.' The manual needs to be written for operators who are working in a loud, fast-paced environment. It must use clear, numbered steps, emphasize 'Zero-Harm' values, and include a mandatory verification step where a second operator confirms the machine is locked out.",
  },
  {
    personaId: 'food-plant-ops',
    challengeId: 2,
    title: 'Craft a prompt to minimize raw material waste in a bakery production.',
    scenario: "Your artisan sourdough line is showing an 8% increase in raw flour and specialty yeast waste. This is cutting directly into the thin margins of your 'Premium Harvest' line. Is it the new high-humidity proofer? Is it the training of the overnight shift? Or is it a calibration issue on the digital scaling system? You need to build a prompt that acts as an expert Root Cause Analysis consultant, asking for specific data points from your production logs to isolate the exact variable causing the spike in waste.",
  },

  // Sales Professional Challenges
  {
    personaId: 'sales-pro',
    challengeId: 1,
    title: "Create a cold outreach prompt for a \"whale\" client in the tech sector.",
    scenario: "You are targeting the CTO of 'Nebula Cloud Systems,' a massive enterprise that currently uses your primary competitor for their edge computing needs. You know through industry reports that they are suffering from significant data latency issues in their European markets. You have exactly one shot at an introductory email. The prompt should generate a message that avoids a generic sales pitch, focuses entirely on the specific latency pain point, and proposes a 10-minute 'no-pressure' executive summary of how your architecture solved a similar issue for another global firm.",
  },
  {
    personaId: 'sales-pro',
    challengeId: 2,
    title: 'Draft a prompt to handle the "Your price is too high" objection.',
    scenario: "You've been nurturing a lead at 'Global Logistics' for six months. They are ready to sign, but the procurement officer just called to say a newer, cheaper competitor pitched them a price that is 20% lower than your 'best' offer. Your solution is more expensive because of its proprietary AI-driven predictive maintenance engine, which significantly reduces long-term operational costs. You need a value-driven response prompt that helps the AI craft a rebuttal focusing on 'Total Cost of Ownership' rather than initial purchase price.",
  },

  // Finance Analyst Challenges
  {
    personaId: 'finance-analyst',
    challengeId: 1,
    title: 'Analyze a quarterly P&L to find 5 specific cost-saving opportunities.',
    scenario: "The Q3 P&L for 'Modern Textiles' shows a 12% drop in net margins despite a 5% increase in top-line revenue. The private equity owners are demanding immediate action. You've noticed that 'Utilities' and 'Corporate Travel' have ballooned beyond historical averages. You need a prompt that instructs an AI to act as a Forensic Accountant, digging into line-item details to identify five specific, low-impact cost-saving opportunities that can be implemented within 30 days without affecting core production quality or headcount.",
  },
  {
    personaId: 'finance-analyst',
    challengeId: 2,
    title: 'Create a prompt for a CAPEX investment justification for a new freezer.',
    scenario: "Your current blast freezer is 15 years old and failing. Maintenance logs show it cost $2,500/month in repairs over the last quarter, and it consumes 40% more energy than modern units. A new 'SubZero 3000' costs $55,000 but would eliminate repair costs and save $1,200/month in electricity. The Board of Directors has a strict 2-year ROI requirement for all CAPEX. You need to craft a prompt to generate a persuasive, data-heavy investment memo that highlights the 'Cost of Inaction' and provides a clear net-present-value calculation.",
  },

  // Engineering & Maintenance Challenges
  {
    personaId: 'maintenance-engineer',
    challengeId: 1,
    title: 'Build a preventive maintenance schedule prompt for an aging steam boiler.',
    scenario: "The central steam boiler for your textile plant is a '1985 Industrial Steamer' that is the heartbeat of the factory. It has been showing signs of excessive scale buildup and minor seal leaks. If this boiler goes down, the entire plant stops. You need a prompt to create a rigorous, multi-layered preventive maintenance schedule. It should include daily visual inspections, weekly chemical balance checks, and monthly ultrasonic testing of the pressure vessels. The schedule must be structured so a technician can easily log their findings and flag immediate risks to the plant manager.",
  },
  {
    personaId: 'maintenance-engineer',
    challengeId: 2,
    title: 'Craft a prompt for a Root Cause Analysis (RCA) of a conveyor belt motor failure.',
    scenario: "Line 4's main conveyor motor burned out twice in the last seven days, causing 14 hours of total downtime during your busiest season. The motor casing was hot to the touch and there was a distinct smell of ozone. Is it an electrical phase imbalance from the old transformer? Is it mechanical overload from the new, heavier product line? Or is it a bearing lubrication failure due to poor maintenance? You need to craft a structured prompt that leads a maintenance team through a '5-Whys' analysis to ensure the root cause is fixed, not just the motor replaced.",
  },
];
