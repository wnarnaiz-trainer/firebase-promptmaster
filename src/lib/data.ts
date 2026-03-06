import { 
  Megaphone, 
  Code2, 
  Feather, 
  GraduationCap,
  Truck,
  Factory,
  TrendingUp,
  Wallet,
  Settings,
  Library,
  Users,
  Briefcase,
  LineChart,
  Lightbulb,
  ShieldCheck
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
    icon: Library,
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
    icon: LineChart,
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
    icon: ShieldCheck,
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
    scenario: "AquaPure is launching 'EarthBottle,' a revolutionary water bottle made entirely from corn-starch based bioplastics that are 100% home-compostable. The brand's mission is to eliminate single-use plastic in urban environments. You are targeting environmentally conscious Gen Z and Millennials on platforms like TikTok and Instagram. Your budget for the initial launch is tight, so the copy needs to be punchy, highly shareable, and clearly communicate the unique value of 'vanishing' after use without sacrificing durability during use. You need to consider the tone of voice which should be optimistic, slightly rebellious against 'big plastic', and deeply authentic. How would you prompt an AI to generate three distinct taglines and a 15-second script for a video ad?",
  },
  {
    personaId: 'marketing-guru',
    challengeId: 2,
    title: 'Define a brand voice and brainstorm a launch event for a coffee shop rebranding.',
    scenario: "'The Daily Grind' has been a neighborhood staple for 20 years, known for its mismatched furniture and grumpy but lovable owner. However, three new third-wave coffee chains have opened within a two-block radius. The owner wants to rebrand as 'Grind & Gather,' shifting the focus toward a modern, community-centric 'third space' that attracts young freelancers during the day and hosts local vinyl listening sessions at night. You need to define a voice that honors the shop's history while feeling fresh, sophisticated, and welcoming to the new demographic. The launch event should be low-cost but high-impact, leveraging local influencers and neighborhood 'word of mouth'.",
  },

  // Software Engineer Challenges
  {
    personaId: 'software-engineer',
    challengeId: 1,
    title: 'Generate clear documentation for an open-source library function.',
    scenario: "You are the lead maintainer of 'DataViz-Core,' a popular open-source JavaScript library for reactive data visualization. Your team has just finished a complex new function, `generateScalableHeatmap()`, which handles dynamic coordinate normalization, color-interpolation, and edge-case handling for null values. The codebase is growing fast, and manual documentation is becoming a bottleneck. You need to create a high-quality prompt that can automatically generate JSDoc comments, including specific parameter types, return values, and a practical example of how to handle a 2D array of sparse data. The documentation must be accessible to junior developers while remaining technically precise for seniors.",
  },
  {
    personaId: 'software-engineer',
    challengeId: 2,
    title: 'Draft a system design for a real-time notification service.',
    scenario: "Your startup is scaling rapidly, and the current monolithic notification system is failing under the load of 1 million concurrent users. You need to design a distributed, fault-tolerant notification service that supports Push, Email, and SMS. The system must handle high-priority alerts (like security codes) with sub-second latency while managing bulk marketing notifications with lower priority. You are working with a stack that includes Node.js, Redis for queuing, and a PostgreSQL database. Your prompt should ask the AI to produce a high-level architecture diagram (described in text) and a detailed explanation of the data flow and scaling strategy.",
  },

  // Creative Writer Challenges
  {
    personaId: 'creative-writer',
    challengeId: 1,
    title: 'Develop a character profile and opening scene for a cyberpunk noir novel.',
    scenario: "In the rain-slicked neon streets of Neo-Manila, year 2088, the line between human and machine is blurred. Your protagonist, Elias 'Viper' Santos, is a former corporate enforcer turned private investigator who specializes in 'ghost-hacking'—retrieving memories from corrupted neural implants. Elias has a cybernetic eye that sees 'data leaks' but causes chronic migraines. He lives in a cramped apartment above a noodle shop. You need to create a prompt that generates a deep psychological profile for Elias and a gripping opening scene where he receives a mysterious, untraceable 'ghost-call' that mentions his missing sister.",
  },
  {
    personaId: 'creative-writer',
    challengeId: 2,
    title: 'Write a short story opening about a clockmaker who discovers a watch that stops time.',
    scenario: "Master Alistair has spent fifty years in a dusty shop in Geneva, surrounded by the rhythmic ticking of thousands of timepieces. One rainy Tuesday, an elderly woman brings in a pocket watch that doesn't tick, but hums. When Alistair opens the casing, he realizes it doesn't measure time—it controls it. As he presses a small hidden lever, the rain outside the window freezes mid-air. You need to craft a prompt that sets the atmosphere of the shop, describes the physical sensation of time stopping, and ends with Alistair making a choice about whether to use this power to fix a mistake from his own past.",
  },

  // Historian Challenges
  {
    personaId: 'historian',
    challengeId: 1,
    title: 'Analyze the impact of the Silk Road on cultural exchange between East and West.',
    scenario: "You are preparing a lecture for university students about the unintended consequences of trade. Focus specifically on the Tang Dynasty in China and the Byzantine Empire. You need to analyze how the Silk Road was not just a route for silk and spices, but a highway for religious ideas (like Nestorian Christianity and Buddhism), musical instruments, and even agricultural techniques. Your prompt should ask the AI to synthesize these varied cultural threads into a coherent argument about how trade creates a 'globalized' world long before the modern era, citing specific artifacts or historical records as evidence.",
  },
  {
    personaId: 'historian',
    challengeId: 2,
    title: 'Debunk common myths about the Victorian Era using primary source evidence.',
    scenario: "Modern pop culture often portrays the Victorian era as purely repressed, gray, and humorless. You are writing an article for a history magazine that challenges this 'Master Narrative.' You want to focus on the vibrant underground cultures, the obsession with spiritualism and the macabre, and the radical scientific breakthroughs of the time. Your prompt should guide the AI to use specific primary source examples—like diary entries from the working class or satirical cartoons from 'Punch' magazine—to show a more complex, colorful, and often contradictory side of 19th-century life.",
  },

  // HR Manager Challenges
  {
    personaId: 'hr-manager',
    challengeId: 1,
    title: 'Draft a modern, inclusive job description for a Senior UX Researcher.',
    scenario: "Your company, 'FlowState Apps,' is known for its diverse and neurodivergent-friendly workplace. You are hiring a Senior UX Researcher who will lead accessibility initiatives. The traditional 'years of experience' and 'degree required' metrics are less important to you than empathy, analytical rigor, and a proven track record of inclusive design. You need a prompt that generates a job description that avoids gendered language, clearly outlines the company's commitment to remote flexibility, and emphasizes 'skills-based' requirements over traditional credentials.",
  },
  {
    personaId: 'hr-manager',
    challengeId: 2,
    title: 'Develop a framework for conducting difficult performance reviews.',
    scenario: "A long-term employee, Sarah, has seen her productivity dip significantly over the last two quarters. She was previously a top performer, but recent team feedback suggests she is becoming a bottleneck due to communication delays. You suspect burnout or personal issues but need to maintain professional standards. You need a prompt that helps you draft a 'Scripted Conversation' for a performance review. This script must use 'radical candor'—being direct and clear about the issues while showing deep personal care for Sarah's well-being and offering a path toward support and improvement.",
  },

  // Project Manager Challenges
  {
    personaId: 'project-manager',
    challengeId: 1,
    title: 'Create a risk mitigation plan for a large-scale data migration project.',
    scenario: "Your team is migrating 500 terabytes of legacy customer data from an on-premise server to a multi-cloud environment. The deadline is fixed for 6 months from now. Key risks include data corruption during transit, API incompatibilities with the new cloud provider, and potential downtime for the customer-facing portal. You need a prompt that generates a comprehensive Risk Register. This register should categorize risks, assign probability and impact scores, and provide specific mitigation strategies for the 'High' and 'Critical' items, including a rollback plan in case of catastrophic failure.",
  },
  {
    personaId: 'project-manager',
    challengeId: 2,
    title: 'Generate a project timeline and resource allocation for a new product launch.',
    scenario: "You are launching 'SmartSprout,' an automated indoor herb garden kit. The project involves hardware manufacturing, mobile app development, and a coordinated marketing campaign. You have a team of 12 people (3 developers, 2 designers, 1 product manager, 4 marketing specialists, and 2 hardware engineers). You need a prompt that creates a high-level Gantt chart (in text format) for a 12-week sprint to launch. It should identify critical paths, account for lead times in hardware components, and show how you will balance the workload to avoid developer burnout during the final integration phase.",
  },

  // Data Analyst Challenges
  {
    personaId: 'data-analyst',
    challengeId: 1,
    title: 'Write a SQL query and interpret results for a customer churn analysis.',
    scenario: "Your e-commerce platform has noticed a 5% increase in churn among 'Gold' tier members in the Southeast Asia region over the last 90 days. You have access to three tables: `Users`, `Orders`, and `Support_Tickets`. You need a prompt that generates a SQL query to join these tables and identify correlation between high support ticket frequency and churn. Furthermore, the prompt should ask the AI to provide a 3-paragraph summary interpreting the hypothetical results, focusing on identifying the 'tipping point' where a customer decides to leave.",
  },
  {
    personaId: 'data-analyst',
    challengeId: 2,
    title: 'Create a Python script for cleaning and visualizing a messy dataset.',
    scenario: "You've been handed a CSV file containing 50,000 rows of global temperature data from various sensors. The data is messy: some columns have 'NaN' values, some dates are in 'MM/DD/YYYY' and others in 'DD-MM-YYYY', and there are clearly outlier spikes caused by sensor malfunctions. You need a prompt that generates a Python script using `pandas` and `matplotlib`. The script should clean the data (handle missing values, normalize dates, filter outliers) and then create a line chart showing the 12-month rolling average temperature, with a shaded area representing the variance.",
  },

  // Business Analyst Challenges
  {
    personaId: 'business-analyst',
    challengeId: 1,
    title: 'Conduct a SWOT analysis for a brick-and-mortar retail store entering e-commerce.',
    scenario: "'Vintage Vibes' is a successful local record store that wants to start selling globally online. They have a massive inventory of rare vinyl but zero digital presence. Their strengths are their deep niche knowledge and community reputation. Their weaknesses are a lack of technical infrastructure and shipping experience. Opportunities include the global 'vinyl revival' trend, while threats include giant marketplaces like Discogs and Amazon. You need a prompt that generates a detailed SWOT analysis and proposes three strategic 'must-do' actions to leverage their strengths while mitigating the technical threats.",
  },
  {
    personaId: 'business-analyst',
    challengeId: 2,
    title: 'Draft a process improvement plan for a bottlenecked manufacturing line.',
    scenario: "The packaging station at a local toy factory is consistently the bottleneck, causing finished toys to pile up and delay shipping. Currently, the station is manual, with three workers handling assembly, boxing, and labeling. You've observed that the labeling step takes twice as long as boxing due to a malfunctioning printer. You need a prompt that helps you analyze this process using 'Lean Six Sigma' principles. The output should be a proposal for a redesigned workflow, including a cost-benefit analysis of purchasing an automated labeling machine versus hiring a fourth temporary worker.",
  },

  // Cybersecurity Expert Challenges
  {
    personaId: 'cybersecurity-expert',
    challengeId: 1,
    title: 'Draft an incident response plan for a suspected ransomware attack.',
    scenario: "At 3:00 AM on a Sunday, your automated monitoring system detects unusual encryption activity on your main file server. Several critical databases have become inaccessible, and a '.txt' file titled 'READ_FOR_DECRYPTION' has appeared. You are the CISO. You need a prompt that generates an immediate 4-hour Incident Response Plan. This plan must include isolation steps, communication protocols for stakeholders and law enforcement, and a strategy for verifying the integrity of your offline backups before attempting a restore.",
  },
  {
    personaId: 'cybersecurity-expert',
    challengeId: 2,
    title: 'Create a security awareness training module for employees on phishing.',
    scenario: "Recent internal audits show that 15% of employees at your financial services firm still click on 'simulated' phishing links, particularly those that appear to come from internal IT or HR. You need to create a 10-slide training module that is engaging and non-punitive. Your prompt should guide the AI to generate content that teaches 'The Anatomy of a Phish'—showing specific red flags in headers, URLs, and tone of voice. It should also include a 'What to do next' checklist if an employee realizes they've accidentally clicked a suspicious link.",
  },

  // Learning & Development Challenges
  {
    personaId: 'learning-development',
    challengeId: 1,
    title: 'Generate an outline for a "Conflict Resolution" workshop for new leads.',
    scenario: "Internal surveys at 'TechStream Solutions' show that 40% of first-time engineering leads feel overwhelmed by interpersonal friction during sprint planning. Tensions often flare between frontend and backend teams regarding API specifications and deadline pressures. The VP of People has asked you to design a mandatory 2-hour interactive workshop. Your goal is to move past 'corporate speak' and provide actionable frameworks like 'Non-Violent Communication' (NVC) tailored specifically for technical environments. The outline must include a role-playing exercise based on a real-world tech disagreement, a list of 'do and don't' phrases, and a follow-up assessment plan.",
  },
  {
    personaId: 'learning-development',
    challengeId: 2,
    title: 'Draft an e-learning script for "Safe Food Handling" standards.',
    scenario: "A recent minor health inspection at your food processing plant revealed that newer workers are struggling with the 'Three-Sink Method' and consistent temperature logging during peak shifts. You need to produce a 5-minute engaging e-learning video script. The workforce is diverse, with many employees having English as a second language. The script needs to be visually descriptive, using simple but authoritative language, and must emphasize the 'Why' behind the rules—showing the direct link between their actions and consumer safety—to ensure it's not just another boring compliance task. It should include 'Check for Understanding' quiz questions throughout.",
  },

  // Supply Chain Manager Challenges
  {
    personaId: 'supply-chain',
    challengeId: 1,
    title: 'Create a prompt to optimize delivery routes during a fuel price surge.',
    scenario: "Global fuel prices have surged by 30% in the last quarter, and your 'Last-Mile' delivery fleet of 50 trucks in a sprawling metropolitan area is seeing costs skyrocket. Traffic congestion is at an all-time high due to major highway construction. You have access to three years of historical delivery data, including average stop times and traffic patterns. You need a prompt that instructs an AI to analyze these variables and propose a radical new route consolidation strategy. This strategy should prioritize fuel efficiency and 'route density' over raw speed, targeting a 15% reduction in total mileage without violating 24-hour service level agreements (SLAs).",
  },
  {
    personaId: 'supply-chain',
    challengeId: 2,
    title: 'Draft a message to suppliers regarding a critical component shortage.',
    scenario: "A sudden labor strike at a major international shipping port has halted the delivery of 'TX-9' microcontrollers, which are essential for your flagship smart home controller. Production is scheduled to stop in 48 hours unless you secure an emergency shipment from a secondary source. You have three long-term vendors who are likely also facing shortages. You need to craft a highly strategic and persuasive message to these partners that leverages your 10-year relationship, offers a flexible payment plan in exchange for priority allocation, and emphasizes the mutual long-term loss if this product launch fails.",
  },

  // Food Plant Operations Challenges
  {
    personaId: 'food-plant-ops',
    challengeId: 1,
    title: 'Develop a safety protocol prompt for a high-speed bottling line.',
    scenario: "The 'Mark IV' bottling line at your beverage plant runs at a staggering 600 bottles per minute. Last week, a 'near-miss' occurred when an operator reached into a moving conveyor to clear a glass jam without engaging the emergency stop. The workforce is currently on edge, and safety culture needs a boost. You need to develop a new, iron-clad 'Jam Intervention Protocol.' The manual needs to be written for operators who are working in a loud, fast-paced environment. It must use clear, numbered steps, emphasize 'Zero-Harm' values, and include a mandatory verification step where a second operator confirms the machine is locked out.",
  },
  {
    personaId: 'food-plant-ops',
    challengeId: 2,
    title: 'Craft a prompt to minimize raw material waste in a bakery production.',
    scenario: "Your artisan sourdough line is showing an 8% increase in raw flour and specialty yeast waste over the last month. This is cutting directly into the thin margins of your 'Premium Harvest' line. You suspect issues with either the high-humidity proofer calibration, the training level of the new overnight shift, or potentially a calibration drift in the digital scaling system. You need to build a prompt that acts as an expert Root Cause Analysis (RCA) consultant. This consultant should ask for specific data points from your production logs (like humidity logs, waste logs by shift, and equipment maintenance dates) to isolate the exact variable causing the spike.",
  },

  // Sales Professional Challenges
  {
    personaId: 'sales-pro',
    challengeId: 1,
    title: "Create a cold outreach prompt for a \"whale\" client in the tech sector.",
    scenario: "You are targeting the CTO of 'Nebula Cloud Systems,' a massive enterprise that currently uses your primary competitor for their edge computing needs. You know through industry reports that they are suffering from significant data latency issues in their European markets, affecting their stock price. You have exactly one shot at an introductory email. The prompt should generate a message that avoids a generic sales pitch, focuses entirely on the specific latency pain point, and proposes a 10-minute 'no-pressure' executive summary of how your architecture solved a similar issue for another global firm with measurable results.",
  },
  {
    personaId: 'sales-pro',
    challengeId: 2,
    title: 'Draft a prompt to handle the "Your price is too high" objection.',
    scenario: "You've been nurturing a lead at 'Global Logistics' for six months. They are finally ready to sign, but the procurement officer just called to say a newer, cheaper competitor pitched them a price that is 20% lower than your 'best' offer. Your solution is more expensive because of its proprietary AI-driven predictive maintenance engine, which significantly reduces long-term operational costs (TCO). You need a value-driven response prompt that helps the AI craft a rebuttal focusing on long-term ROI and 'Cost of Inaction' rather than just the initial purchase price.",
  },

  // Finance Analyst Challenges
  {
    personaId: 'finance-analyst',
    challengeId: 1,
    title: 'Analyze a quarterly P&L to find 5 specific cost-saving opportunities.',
    scenario: "The Q3 P&L for 'Modern Textiles' shows a worrying 12% drop in net margins despite a steady 5% increase in top-line revenue. The private equity owners are demanding an immediate recovery plan. You've noticed that 'Utilities' and 'Corporate Travel' have ballooned beyond historical averages, and 'Raw Material Variance' is also high. You need a prompt that instructs an AI to act as a Forensic Accountant. It should dig into line-item details to identify five specific, low-impact cost-saving opportunities that can be implemented within 30 days without affecting core production quality or headcount.",
  },
  {
    personaId: 'finance-analyst',
    challengeId: 2,
    title: 'Create a prompt for a CAPEX investment justification for a new freezer.',
    scenario: "Your current blast freezer is 15 years old and failing. Maintenance logs show it cost $2,500/month in repairs over the last quarter, and energy meters show it consumes 40% more energy than modern units. A new 'SubZero 3000' costs $55,000 but would eliminate repair costs and save $1,200/month in electricity. The Board of Directors has a strict 2-year ROI requirement for all CAPEX over $50k. You need to craft a prompt to generate a persuasive, data-heavy investment memo that highlights the 'Cost of Inaction' and provides a clear net-present-value (NPV) and internal rate of return (IRR) calculation.",
  },

  // Engineering & Maintenance Challenges
  {
    personaId: 'maintenance-engineer',
    challengeId: 1,
    title: 'Build a preventive maintenance schedule prompt for an aging steam boiler.',
    scenario: "The central steam boiler for your textile plant is a '1985 Industrial Steamer' that is the heartbeat of the factory. It has been showing signs of excessive scale buildup and minor seal leaks around the main valves. If this boiler goes down, the entire plant stops and you lose $50k per hour. You need a prompt to create a rigorous, multi-layered preventive maintenance (PM) schedule. It should include daily visual inspections, weekly chemical balance checks, and monthly ultrasonic testing of the pressure vessels. The schedule must be structured so a technician can easily log findings and flag risks to the plant manager immediately.",
  },
  {
    personaId: 'maintenance-engineer',
    challengeId: 2,
    title: 'Craft a prompt for a Root Cause Analysis (RCA) of a conveyor belt motor failure.',
    scenario: "Line 4's main conveyor motor burned out twice in the last seven days, causing 14 hours of total downtime during your peak shipping season. The motor casing was hot to the touch and there was a distinct smell of ozone. Is it an electrical phase imbalance from the old transformer? Is it mechanical overload from the new, heavier product line? Or is it a bearing lubrication failure due to poor maintenance? You need to craft a structured prompt that leads a maintenance team through a '5-Whys' analysis to ensure the root cause is fixed, not just the motor replaced for the third time.",
  },
];
