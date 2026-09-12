import { 
  MetricItem, 
  SupportScenario, 
  SupportSkillGroup, 
  SupportPrinciple,
  ExperienceItem, 
  EducationItem, 
  CertificationItem 
} from '../types';

export const PERSONAL_INFO = {
  name: "Olumide Oderinde",
  title: "Customer Support & Experience Specialist",
  tagline: "Turning customer frustration into lasting brand loyalty with genuine empathy, clear human communication, and rapid first-contact resolution.",
  email: "olumideooderinde@gmail.com",
  phone: "+234 806 061 7790",
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1) — Flexible for US (EST/PST), UK/CET, and APAC coverage",
  availability: "Immediately available for Full-Time, Remote Customer Support roles",
  bio: "Customer-centric support professional with over 4 years of experience delivering exceptional, high-touch support across live chat, email, ticketing, and voice. Expert at diffusing tense customer escalations, untangling billing and account questions, writing clear self-serve guides, and advocating for the customer's voice with product teams. Consistently maintains 97%+ CSAT and sub-2-minute chat response times.",
  channels: [
    { name: "Live Chat Support", desc: "Fast, responsive real-time chat with human warmth and zero robotic scripts." },
    { name: "Email & Ticketing", desc: "Thorough, structured, and empathetic resolutions for complex account inquiries." },
    { name: "Customer Onboarding", desc: "Guiding new users from initial signup to confident, daily product adoption." },
    { name: "Help Center / KB", desc: "Authoring crystal-clear, searchable guides and video walkthroughs." }
  ]
};

export const KEY_METRICS: MetricItem[] = [
  {
    value: "97.8%",
    label: "Customer Satisfaction (CSAT)",
    description: "Maintained across 4,500+ resolved inquiries across live chat and email support."
  },
  {
    value: "< 1.8 min",
    label: "Chat First Response Time",
    description: "Sub-2-minute median initial response speed, eliminating customer wait anxiety."
  },
  {
    value: "94.2%",
    label: "First Contact Resolution (FCR)",
    description: "Resolving user issues thoroughly in the first interaction without repeated back-and-forth."
  },
  {
    value: "99.4%",
    label: "SLA Adherence",
    description: "Consistent SLA reliability on priority queues, billing inquiries, and enterprise escalations."
  }
];

export const SUPPORT_PRINCIPLES: SupportPrinciple[] = [
  {
    title: "Empathy Before Explanation",
    tagline: "Acknowledge feelings before troubleshooting",
    description: "When a customer is blocked, they first need to know their stress is heard and respected. Validating their frustration diffuses tension and builds immediate trust.",
    iconName: "HeartHandshake"
  },
  {
    title: "Zero Jargon, 100% Clarity",
    tagline: "Plain English that anyone can follow",
    description: "Never baffle customers with internal system codes or convoluted procedures. Break solutions into numbered, bite-sized steps accompanied by screenshots or quick videos.",
    iconName: "MessageCircle"
  },
  {
    title: "Own the Issue to Completion",
    tagline: "No passing the buck or cold handoffs",
    description: "If an issue requires collaboration with billing or operations, I stay as the customer's personal advocate until their problem is completely solved and confirmed.",
    iconName: "ShieldCheck"
  },
  {
    title: "Solve Today, Prevent Tomorrow",
    tagline: "Turning support tickets into self-serve knowledge",
    description: "Every recurring ticket is an opportunity to improve. I turn confusing customer questions into easy-to-read Help Center articles and proactive product feedback.",
    iconName: "BookOpen"
  }
];

export const SUPPORT_SCENARIOS: SupportScenario[] = [
  {
    id: "billing-dispute-deescalation",
    title: "De-escalating an Accidental Subscription Renewal & Retaining the Account",
    category: "Billing & Subscriptions",
    priority: "Urgent",
    customerType: "SMB Customer",
    channel: "Live Chat",
    summary: "A distressed small-business owner was auto-billed $588 for an annual team subscription renewal they forgot to cancel, threatening an immediate chargeback and public complaint.",
    customerFrustration: "The customer felt blindsided by the annual charge right before their quarterly payroll and believed the company had intentionally hidden the renewal date.",
    incomingMessage: "I just got hit with a $588 charge on my card out of nowhere!! I haven't used this software in 2 months. Reverse this immediately or I am reporting this charge as fraud to my bank right now!!",
    empathyResponse: "Hi Sarah, I completely understand why seeing an unexpected $588 charge would be alarming, especially when you weren't actively using the team workspace. I am personally looking into this right now and I will make sure we get this resolved for you today—you don't have to worry about fighting this with your bank.",
    investigationAndAction: [
      "Instantly paused automated follow-up sequences to give 100% dedicated live chat attention.",
      "Checked billing records in Stripe/Zendesk: verified the account had no team seat activity for 45 days, confirming genuine oversight rather than misuse.",
      "Processed an immediate full refund for the $588 renewal within policy discretion.",
      "Offered to transition the workspace to a free archive tier so the customer would not lose their 18 months of historical documents.",
      "Sent a receipt confirmation directly to their email with transaction reference IDs."
    ],
    resolutionOutcome: "Refund cleared in 48 hours. The customer apologized for the initial anger, thanked me for treating them like a human, and decided to keep 1 active single-user license ($15/mo) instead of terminating completely.",
    csatScore: "5/5 Star Rating with comment: 'Olumide handled my panic with pure grace and resolved it in 4 minutes.'",
    retentionImpact: "Saved account from chargeback dispute fees ($15 fee + bank penalty) and retained an ongoing paid customer relationship.",
    keyTakeaway: "Speedy empathy and decisive action defuse billing panics far better than quoting strict terms of service."
  },
  {
    id: "onboarding-adoption-confusion",
    title: "Guiding a Frustrated Non-Technical Team Through First-Time Setup",
    category: "Onboarding & Adoption",
    priority: "High Priority",
    customerType: "Enterprise Client",
    channel: "Email / Ticket",
    summary: "An operations manager at a healthcare clinic felt overwhelmed setting up staff permissions, complaining that the software was 'too complicated' and threatening to cancel during the trial.",
    customerFrustration: "The manager was intimidated by multi-role permission settings and worried about clinic staff accidentally deleting patient schedules.",
    incomingMessage: "This software is ridiculously unintuitive. I have spent 3 hours trying to invite my 8 staff members and half of them can't see the appointment calendar. We don't have time for this, please cancel our trial.",
    empathyResponse: "Hello Marcus, I hear you, and I am so sorry for how frustrating the past 3 hours have been. You have a busy clinic to run, and the software should make your day easier, not harder. Let's take the stress off your shoulders—I will personally walk you through getting everyone set up with the exact calendar views they need.",
    investigationAndAction: [
      "Reviewed their account configuration and spotted that the team members were assigned to 'Guest' roles rather than 'Staff Viewer', hiding the master calendar.",
      "Rather than sending a wall of text, recorded a friendly, customized 2-minute Loom video demonstrating the exact 3 clicks needed to adjust staff roles.",
      "Offered to adjust the roles directly with their permission to save them any further manual work.",
      "Provided a printable 1-page PDF quick-start checklist designed specifically for clinic staff."
    ],
    resolutionOutcome: "Marcus replied enthusiastically after watching the short video: 'That made so much sense! Everyone can see the calendar now.' The clinic completed their trial and signed an annual contract for 12 seats.",
    csatScore: "5/5 Star Rating ('Best onboarding support experience we have had with any SaaS vendor.')",
    retentionImpact: "Converted a churned trial into a $2,400 ARR annual contract; created a new template video now used across all medical onboarding.",
    keyTakeaway: "Personalized visual guidance (like short video walkthroughs) eliminates technical anxiety and builds instant product confidence."
  },
  {
    id: "urgent-account-lockout",
    title: "Resolving an Urgent 2-Factor Lockout Minutes Before an Investor Meeting",
    category: "Account Security & Access",
    priority: "Urgent",
    customerType: "Individual Pro",
    channel: "Live Chat",
    summary: "A founder got locked out of their account due to a broken phone authenticator app right before an executive pitch, unable to access critical presentation assets.",
    customerFrustration: "High stress, high adrenaline, terrified of missing an irreplaceable presentation window, unable to bypass the 2FA prompt.",
    incomingMessage: "EMERGENCY: I broke my phone screen this morning and I cannot get my 2FA authentication code! My pitch meeting is in 25 minutes and all my slides are inside my account. PLEASE HELP ME GET IN!!",
    empathyResponse: "I am on it right now! Take a deep breath—we have an expedited emergency verification protocol for situations exactly like this. I am staying right here with you on chat until you are safely logged in.",
    investigationAndAction: [
      "Remained calm, structured, and focused—did not allow panic to degrade security protocols.",
      "Initiated out-of-band identity verification via backup registered phone SMS and verified domain ownership within 3 minutes.",
      "Temporarily granted a secure single-session access token and guided them to export their required presentation slides.",
      "Scheduled a follow-up ticket for later that afternoon to assist in resetting their permanent 2FA keys once their replacement phone was active."
    ],
    resolutionOutcome: "The user was inside their account in under 7 minutes, with 18 minutes to spare before their presentation.",
    csatScore: "5/5 Star Rating with personal note to management: 'Olumide literally saved my business pitch today.'",
    retentionImpact: "Earned lifetime brand advocacy and a word-of-mouth referral of 3 other startup founders.",
    keyTakeaway: "In critical moments, customers don't just want a solution—they want calm, reassuring confidence that someone is in their corner."
  },
  {
    id: "workflow-feature-confusion",
    title: "Turning Feature Confusion into a Delighted Workflow Solution",
    category: "Workflow & Feature Guidance",
    priority: "Standard Inquiry",
    customerType: "SMB Customer",
    channel: "Email / Ticket",
    summary: "A marketing lead was frustrated because an exported report was missing key metrics, believing the platform was malfunctioning.",
    customerFrustration: "Customer was under deadline pressure to deliver monthly analytics to their VP and thought our export tool was broken.",
    incomingMessage: "Your export CSV button is broken. It only exports 3 columns of data and leaves out customer acquisition channels. This is completely useless for my executive report.",
    empathyResponse: "Hi Danielle, thank you for reaching out, and I understand how critical having those acquisition channels is for your executive review. The good news is your data is safe and completely intact! Let me show you how to pull the comprehensive multi-channel report you need in just two steps.",
    investigationAndAction: [
      "Identified that the customer was using the 'Quick Summary' export rather than the 'Custom Attribution View'.",
      "Created a customized saved view in their dashboard that pre-filters by acquisition channel and date range so they never have to configure it again manually.",
      "Sent clear, annotated screenshots highlighting the exact dropdown to use.",
      "Drafted an internal note to the product team suggesting clearer labels for the export buttons."
    ],
    resolutionOutcome: "Danielle delivered her report on time to her VP and bookmarked the custom saved view for all future monthly reports.",
    csatScore: "5/5 Star Rating ('Thank you for the quick and super clear screenshots! Saved my morning.')",
    retentionImpact: "Boosted weekly active platform usage and eliminated repeat export tickets from this company.",
    keyTakeaway: "Never tell a customer 'you clicked the wrong button.' Reframe the answer to guide them effortlessly to their intended outcome."
  },
  {
    id: "platform-outage-crisis-comm",
    title: "Managing Customer Anxiety During a 45-Minute Unscheduled Service Outage",
    category: "Crisis Communication & De-escalation",
    priority: "Urgent",
    customerType: "Enterprise Client",
    channel: "Live Chat",
    summary: "During a cloud hosting disruption affecting dashboard availability, incoming chat volume spiked by 400% with angry customers demanding immediate answers.",
    customerFrustration: "Customers feared their data was lost or their own services were down, creating widespread uncertainty across dozens of accounts.",
    incomingMessage: "Everything is down! Are we being hacked? Is my data gone? What is happening??",
    empathyResponse: "Hi there, I completely understand your concern. Please rest assured: all your data is 100% secure. Our core servers are currently undergoing an urgent connection recovery, and our entire infrastructure team is actively working on it right now. I will post updates right here every 10 minutes until everything is back up.",
    investigationAndAction: [
      "Swiftly deployed an informative, reassuring banner on the Help Center and public status page.",
      "Managed the high-volume chat queue with rapid, empathetic updates, preventing panic and rumors.",
      "Sent periodic status updates keeping customers informed of real-time progress rather than leaving them in silence.",
      "Once service was restored, sent personalized confirmation notes to every waiting customer confirming their dashboards were operational."
    ],
    resolutionOutcome: "Service was restored within 45 minutes with zero data loss. Handled over 65 customer chats during the window with an overall 96% positive sentiment rating.",
    csatScore: "96% Positive CSAT across the incident queue.",
    retentionImpact: "Zero customer churn resulting from the outage due to proactive, transparent, and empathetic communication.",
    keyTakeaway: "In a crisis, silence breeds anger. Frequent, honest, and calm communication maintains customer loyalty even when technology fails."
  }
];

export const SUPPORT_SKILL_GROUPS: SupportSkillGroup[] = [
  {
    title: "Customer Care & De-escalation",
    description: "The human skills that turn difficult interactions into positive experiences.",
    skills: [
      { name: "Conflict De-escalation", description: "Diffusing high-stress customer situations with composure, active listening, and validation.", proficiency: "Expert" },
      { name: "Empathetic Communication", description: "Writing natural, warm, and reassuring messages without canned robot tones.", proficiency: "Expert" },
      { name: "Active Listening & Inquiry", description: "Uncovering the real root problem behind vague or emotional customer complaints.", proficiency: "Expert" },
      { name: "Customer Retention & Advocacy", description: "Identifying churn warning signs and advocating internally for customer needs.", proficiency: "Advanced" },
      { name: "VIP & Enterprise Care", description: "Delivering high-touch, executive-level support for high-value business accounts.", proficiency: "Advanced" }
    ]
  },
  {
    title: "Helpdesk Platforms & Tooling",
    description: "Day-to-day ticketing systems, live chat consoles, and customer support software.",
    skills: [
      { name: "Zendesk Support & Guide", description: "Macros, ticket triage, queue management, triggers, and knowledge base publishing.", proficiency: "Expert" },
      { name: "Intercom", description: "Omnichannel live chat, inbox management, user tagging, and automated series.", proficiency: "Expert" },
      { name: "Freshdesk / Freshchat", description: "Multi-channel ticketing, SLA tracking, and customer portal management.", proficiency: "Advanced" },
      { name: "Salesforce Service Cloud", description: "Case management, account history review, and enterprise customer records.", proficiency: "Proficient" },
      { name: "HubSpot Service Hub", description: "Ticket pipelines, customer feedback surveys, and knowledge center.", proficiency: "Advanced" }
    ]
  },
  {
    title: "Support Operations & Collaboration",
    description: "Organizing knowledge, collaborating across teams, and driving operational efficiency.",
    skills: [
      { name: "Knowledge Base Authoring", description: "Writing clear, searchable FAQ articles, guides, and illustrated walkthroughs.", proficiency: "Expert" },
      { name: "Loom & Video Walkthroughs", description: "Recording quick, friendly screen recordings to solve visual confusion in minutes.", proficiency: "Expert" },
      { name: "Slack & Asana / Jira", description: "Smooth cross-functional handoffs to product and billing teams with full context.", proficiency: "Advanced" },
      { name: "Notion & Google Workspace", description: "Creating internal team playbooks, standard operating procedures (SOPs), and macros.", proficiency: "Expert" },
      { name: "CSAT & Feedback Analysis", description: "Reviewing customer survey comments to uncover product friction trends.", proficiency: "Advanced" }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Senior Customer Support Specialist",
    company: "Global Remote SaaS / Client Services",
    location: "Remote (International)",
    period: "2022 — Present",
    type: "Full-Time (Remote)",
    summary: "Leading frontline omnichannel customer support across live chat, email, and ticketing for thousands of active business users. Championing empathetic de-escalation, rapid first response times, and self-serve documentation.",
    achievements: [
      "Consistently maintained a 98% average CSAT score across 3,500+ live chat interactions and tickets.",
      "Reduced median First Response Time (FRT) on live chat from 4.5 minutes to under 1.8 minutes.",
      "Authored 45+ comprehensive Help Center articles, deflecting an estimated 22% of recurring incoming inquiries.",
      "Spearheaded VIP escalations and billing disputes, successfully retaining over 85% of at-risk accounts.",
      "Trained and mentored 4 junior customer support agents on tone guidelines and de-escalation playbooks."
    ],
    toolsUsed: ["Zendesk", "Intercom", "Slack", "Loom", "Notion", "Stripe Billing", "Google Workspace"]
  },
  {
    role: "Customer Care & Onboarding Representative",
    company: "TechPulse Digital Solutions",
    location: "Lagos, Nigeria",
    period: "2020 — 2022",
    type: "Full-Time",
    summary: "Managed day-to-day incoming customer inquiries, assisted new signups with account onboarding, and resolved subscription and access questions.",
    achievements: [
      "Handled 40-60 customer tickets daily across email and web chat with a 95%+ first-contact resolution rate.",
      "Created structured onboarding checklists that helped new customers activate their accounts 35% faster.",
      "Collaborated closely with product managers to report user-reported bugs with clear repro steps and customer sentiment notes.",
      "Awarded 'Customer Advocate of the Quarter' twice for outstanding customer feedback ratings."
    ],
    toolsUsed: ["Freshdesk", "HubSpot", "Google Sheets", "Zendesk Guide", "Trello"]
  },
  {
    role: "Client Support Associate",
    company: "Apex Enterprise Services",
    location: "Lagos, Nigeria",
    period: "2018 — 2020",
    type: "Full-Time",
    summary: "Provided customer care and phone/email assistance for corporate accounts, managing order status, billing adjustments, and account verification.",
    achievements: [
      "Maintained 99%+ SLA adherence for priority client inquiries.",
      "De-escalated billing discrepancies and expedited invoice delivery, shortening payment dispute cycles.",
      "Standardized 20+ response macros to improve team response consistency and accuracy."
    ],
    toolsUsed: ["CRM Systems", "Helpdesk Ticketing", "Email Support", "VoIP Phone Systems"]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Ladoke Akintola University of Technology (LAUTECH)",
    location: "Ogbomoso, Nigeria",
    year: "Graduated"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Customer Service Foundations & De-escalation",
    issuer: "LinkedIn Learning / Professional Certificate",
    year: "Verified"
  },
  {
    name: "Zendesk Customer Service Specialist",
    issuer: "Zendesk Training Academy",
    year: "Verified"
  },
  {
    name: "Effective Communication & Active Listening",
    issuer: "Professional Development Institute",
    year: "Verified"
  }
];
