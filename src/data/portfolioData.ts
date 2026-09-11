import { 
  MetricItem, 
  SupportScenario, 
  SupportSkillGroup, 
  SupportPrinciple,
  ExperienceItem, 
  EducationItem, 
  CertificationItem,
  TestimonialItem,
  SimulatorScenario,
  WorkSampleItem
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

export const RECRUITER_FAST_FACTS = {
  noticePeriod: "Immediate (0 days notice — ready to start next business day)",
  employmentType: "Full-Time (40 hrs/week) Remote or Long-Term Contractor",
  timezoneCoverage: "Full overlap with US (EST / CST / PST), UK (GMT / BST), and Europe (CET)",
  workHoursFlexibility: "Comfortable working rotating shifts, weekends, and on-call rotations",
  englishProficiency: "Native / Bilingual C2 Professional Fluency (flawless written tone & clear vocal presence)",
  hardwareSetup: "MacBook Pro M2 (16GB RAM) + 27-inch secondary monitor + Jabra Evolve noise-canceling headset",
  powerRedundancy: "Dedicated UPS battery backup + hybrid inverter power (zero outages / 100% work continuity)",
  internetSetup: "150 Mbps high-speed primary fiber + automatic 50 Mbps 4G LTE failover hotspot",
  dayOneReadiness: "Pre-trained in Zendesk, Intercom, Freshdesk, Slack, Loom, Notion, Stripe & Jira/Linear",
  csatTrackRecord: "97.8% lifetime CSAT across 4,500+ customer inquiries"
};

export const SIMULATOR_SCENARIOS: SimulatorScenario[] = [
  {
    id: "billing-renewal-dispute",
    customerName: "Sarah Jenkins",
    customerAvatar: "SJ",
    customerCompany: "Beacon Growth Agency (12 seats)",
    channel: "Live Chat",
    issueType: "Unexpected $588 Renewal Charge",
    initialFrustrationLevel: 9,
    customerInitialMessage: "I just woke up to an unauthorized $588 charge on my credit card from your company!! We haven't touched this tool in nearly two months. Reverse this charge RIGHT NOW or I will dispute it with my bank and report you for credit card fraud!",
    olumideActionSummary: [
      "Immediate acknowledgment within 45 seconds to dispel customer panic.",
      "Stripe check: validated zero seat logins for 45 days (confirmed genuine oversight).",
      "Exercised discretionary refund authority without passing customer between departments.",
      "Offered free archive tier preserving 18 months of marketing assets."
    ],
    choices: [
      {
        id: "choice-robot",
        label: "Option A: Strict Policy Enforcer (The Robotic Response)",
        previewText: "Per section 4.2 of our Terms of Service, all annual subscriptions auto-renew automatically and are strictly non-refundable...",
        type: "canned_robot",
        toneRating: "Cold, Defensive & Bureaucratic",
        customerReaction: "Customer files a $588 chargeback + $15 dispute fee, posts an angry rant on LinkedIn, and leaves a 1-star Trustpilot review.",
        sentimentChange: -30,
        outcomeExplanation: "Hiding behind Terms of Service escalates customer panic into retaliation and irreversible churn."
      },
      {
        id: "choice-delay",
        label: "Option B: The Bureaucratic Handoff (Passing the Buck)",
        previewText: "I cannot handle billing issues on chat. You need to send an email to billing@company.com and our finance department will reply in 3-5 business days...",
        type: "cold_defensive",
        toneRating: "Dismissive & Frustrating",
        customerReaction: "Customer immediately calls their bank while waiting: 'Your support is useless, don't bother!' Chargeback filed.",
        sentimentChange: -15,
        outcomeExplanation: "Forcing a panicked customer onto a slow secondary email queue guarantees chargebacks and negative brand sentiment."
      },
      {
        id: "choice-olumide",
        label: "Option C: Olumide's Human-First Ownership (The Winning Approach)",
        previewText: "Hi Sarah, I completely understand why seeing an unexpected $588 charge right before payroll would be alarming. Take a breath—I am personally looking at your billing account right now and I will ensure this is resolved for you today. You won't have to fight this with your bank...",
        type: "olumide_empathy",
        toneRating: "Empathetic, Decisive & Reassuring",
        customerReaction: "Customer's anxiety collapses immediately: 'Thank you so much Olumide, I was so stressed about payroll this morning. I appreciate you treating me like a human.' Customer converts to single-user plan!",
        sentimentChange: +90,
        outcomeExplanation: "Immediate empathetic validation combined with decisive action saves both the revenue relationship and company reputation."
      }
    ],
    olumideMasterResponse: "Hi Sarah, I completely understand why seeing an unexpected $588 charge would be alarming, especially when your team hasn't been active recently. Take a deep breath—I am looking at your account right now and I will take personal ownership of making this right today. You do not have to worry about disputing this with your bank. Give me just 2 minutes while I review your invoice details in Stripe.",
    resolutionTime: "4 minutes 12 seconds",
    csatResult: "5/5 Stars ('Olumide handled my morning panic with grace and solved it in minutes.')",
    revenueRetained: "$180 ARR retained on single seat + saved $588 chargeback fee"
  },
  {
    id: "urgent-pitch-lockout",
    customerName: "David Chen",
    customerAvatar: "DC",
    customerCompany: "Apex Ventures (Founder)",
    channel: "Live Chat",
    issueType: "2FA Lockout 20 Mins Before Investor Demo",
    initialFrustrationLevel: 10,
    customerInitialMessage: "EMERGENCY!! I broke my phone screen 30 minutes ago and I'm locked out by your two-factor prompt. My investor pitch meeting is in 20 minutes and all my pitch deck slides are inside my account! PLEASE GET ME IN IMMEDIATELY OR MY COMPANY IS RUINED!!",
    olumideActionSummary: [
      "Zero delays: prioritized chat queue within 20 seconds.",
      "Calm, steady vocal presence over chat to ground customer's adrenaline.",
      "Out-of-band identity challenge via verified registered SMS and domain TXT validation.",
      "Issued a temporary 60-minute emergency session token directly to verified email."
    ],
    choices: [
      {
        id: "choice-robot-2",
        label: "Option A: Standard Security Script",
        previewText: "Due to strict SOC2 compliance, all 2FA resets take 24 to 48 hours for identity verification. Please submit a government ID photo...",
        type: "canned_robot",
        toneRating: "Rigid & Indifferent to Crisis",
        customerReaction: "Customer misses their once-in-a-lifetime pitch meeting, cancels their $400/mo enterprise contract, and warns their entire VC network.",
        sentimentChange: -40,
        outcomeExplanation: "Following a static script during an acute customer emergency destroys user trust and creates business catastrophe."
      },
      {
        id: "choice-olumide-2",
        label: "Option B: Olumide's High-Stakes Crisis Protocol (The Winning Approach)",
        previewText: "David, take a deep breath—I am right here with you. We have an expedited emergency verification protocol for exactly this situation. I will not leave this chat until you have your presentation open on your screen...",
        type: "olumide_empathy",
        toneRating: "Composed, Reassuring & Action-Driven",
        customerReaction: "David logs in 7 minutes later, delivers his investor deck, and later posts a heartfelt public tweet praising the support team.",
        sentimentChange: +95,
        outcomeExplanation: "Calm composure and rapid execution under pressure transforms a terrifying crisis into a lifetime brand advocate."
      }
    ],
    olumideMasterResponse: "David, take a deep breath—I am right here with you and I am not leaving this chat until you have your slides open on your screen. We have an expedited emergency verification flow for critical moments like this. I have just generated a secure single-use verification link to your registered business domain email. Please click it and let me know the moment your slides load!",
    resolutionTime: "6 minutes 45 seconds",
    csatResult: "5/5 Stars ('Olumide literally saved my company's seed round pitch today.')",
    revenueRetained: "Saved $4,800 ARR Enterprise contract + gained 3 VC portfolio referrals"
  },
  {
    id: "clinic-onboarding-frustration",
    customerName: "Dr. Marcus Vance",
    customerAvatar: "MV",
    customerCompany: "St. Jude Family Health Clinic (14 staff seats)",
    channel: "Ticket",
    issueType: "Permissions Confusion & Threatening Cancellation",
    initialFrustrationLevel: 8,
    customerInitialMessage: "This software is ridiculous. I have wasted 4 hours of my Saturday trying to set up calendars for our 8 nurses and doctors. Nobody can see appointment slots. We do not have time for complex software. Cancel our subscription and refund our clinic immediately.",
    olumideActionSummary: [
      "Diagnosed root cause: users were invited as 'External Guest' rather than 'Clinic Staff'.",
      "Avoided sending a dense 10-paragraph troubleshooting manual.",
      "Recorded a personalized 90-second Loom screen video showing the exact 2 toggle switches.",
      "Offered to apply the permission fix directly with his permission."
    ],
    choices: [
      {
        id: "choice-text-wall",
        label: "Option A: The 1,000-Word Documentation Dump",
        previewText: "Please refer to article #4092 in our documentation: User Access Control Matrix. Ensure RBAC roles have READ_CALENDAR and WRITE_CALENDAR flags configured...",
        type: "canned_robot",
        toneRating: "Overwhelming & Inaccessible",
        customerReaction: "The clinic director gets more frustrated, deletes the app, and confirms cancellation: 'I am a doctor, not an IT engineer.'",
        sentimentChange: -25,
        outcomeExplanation: "Non-technical users under pressure will reject technical jargon and complex documentation links."
      },
      {
        id: "choice-olumide-3",
        label: "Option B: Olumide's Visual Video Walkthrough (The Winning Approach)",
        previewText: "Hello Dr. Vance, I hear your frustration loud and clear. You have patients to take care of, and your calendar should make life easier, not harder. I made a quick 90-second screen video specifically for your clinic...",
        type: "olumide_empathy",
        toneRating: "Respectful, Practical & Human",
        customerReaction: "Dr. Vance replies 15 minutes later: 'That video was brilliant. All 8 doctors are on the calendar now. Thank you for making it so simple!'",
        sentimentChange: +85,
        outcomeExplanation: "Meeting non-technical users where they are with bite-sized visual answers turns churn risks into loyal long-term champions."
      }
    ],
    olumideMasterResponse: "Hello Dr. Vance, I hear your frustration loud and clear. You and your medical staff have patients to care for, and our software should save you time, never take you away from your clinic. The great news is your clinic setup is 95% complete! I inspected your setup and noticed the staff invites were set to 'Guest' rather than 'Staff Viewer.' I made a quick 90-second screen walkthrough showing the 2 clicks to fix it, or if you prefer, simply reply 'Yes' and I will update them for you right now.",
    resolutionTime: "First Contact Resolution (90-second video + proactive fix offer)",
    csatResult: "5/5 Stars ('Best onboarding support experience we have had with any software vendor.')",
    revenueRetained: "Converted trial into $3,360 ARR annual contract"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "Beacon Growth Agency",
    relationship: "Customer (Retained Account)",
    avatarInitials: "SJ",
    quote: "When our accidental renewal charge hit, I was in a full panic right before payroll. Olumide didn't hit me with robotic company policy—he listened, took instant personal ownership, refunded the oversight, and preserved our historical data. I kept our subscription specifically because of how he treated me.",
    rating: 5,
    highlightTag: "Saved Account from Churn"
  },
  {
    id: "test-2",
    author: "Dr. Marcus Vance",
    role: "Clinical Operations Director",
    company: "St. Jude Family Health",
    relationship: "Customer (Enterprise Onboarding)",
    avatarInitials: "MV",
    quote: "I was literally ready to cancel our 14 clinic seats out of sheer frustration with calendar permissions. Olumide sent a 90-second personalized screen video showing exactly what button to click. That single response saved our entire rollout. World-class customer care.",
    rating: 5,
    highlightTag: "Personalized Video Guidance"
  },
  {
    id: "test-3",
    author: "David Chen",
    role: "Managing Partner",
    company: "Apex Ventures",
    relationship: "Customer (Emergency Crisis Resolution)",
    avatarInitials: "DC",
    quote: "I broke my phone 20 minutes before pitching to our lead investors. Olumide stayed on live chat, remained calm when I was losing my mind, and guided me through emergency verification in under 7 minutes. He literally saved our company's pitch today.",
    rating: 5,
    highlightTag: "Crisis De-escalation"
  },
  {
    id: "test-4",
    author: "Elena Rostova",
    role: "Head of Customer Experience",
    company: "Global Remote SaaS",
    relationship: "Direct Team Lead / Supervisor",
    avatarInitials: "ER",
    quote: "Olumide is the dream support specialist every CX leader wishes they had ten of. He consistently held the highest CSAT on our team (98%), never rushed a ticket to hit metrics, and wrote over 40 Help Center guides that permanently reduced our queue volume. Day-one ready for any remote team.",
    rating: 5,
    highlightTag: "Team Lead Endorsement"
  },
  {
    id: "test-5",
    author: "Danielle Torres",
    role: "VP of Growth & Analytics",
    company: "ScaleMetric",
    relationship: "Customer (SMB Account)",
    avatarInitials: "DT",
    quote: "Instead of telling me 'you clicked the wrong button' on my report export, Olumide built a custom saved filter in my dashboard and sent annotated screenshots. He turned what felt like a software defect into my favorite weekly workflow.",
    rating: 5,
    highlightTag: "Proactive Problem Solving"
  }
];

export const WORK_SAMPLES: WorkSampleItem[] = [
  {
    id: "help-center-guide",
    title: "Help Center Guide: Setting Up Staff Permissions Without Calendar Conflicts",
    category: "Help Center Article",
    badge: "Self-Serve Deflection",
    description: "An authentic, easy-to-read knowledge base article written by Olumide that reduced onboarding permission tickets by 34%.",
    metadata: {
      targetAudience: "Non-Technical Administrators & Clinic Managers",
      impactMetric: "89% Helpful Rating across 1,200+ views",
      toolsUsed: ["Zendesk Guide", "Notion", "Clean Annotated Screenshots"]
    }
  },
  {
    id: "macro-calibration",
    title: "Tone & Macro Calibration: The 'Empathy-First' Renewal Dispute Playbook",
    category: "Zendesk Macro Calibration",
    badge: "Retention Optimization",
    description: "Side-by-side comparison of a cold, bureaucratic canned macro versus Olumide's human-centered, de-escalating customer response.",
    metadata: {
      targetAudience: "Customer Support Teams & QA Leads",
      impactMetric: "+42% Customer Sentiment Improvement",
      toolsUsed: ["Zendesk Macros", "Intercom Saved Replies", "Tone Guidelines"]
    }
  },
  {
    id: "engineering-bug-report",
    title: "Engineering Bug Ticket: CSV Attribution Truncation on Safari 17.2",
    category: "Engineering Bug Escalation",
    badge: "Cross-Functional Bridge",
    description: "How Olumide translates customer frustration into a pristine, actionable bug report for software developers with zero wasted back-and-forth.",
    metadata: {
      targetAudience: "Frontend Engineers & Product Managers",
      impactMetric: "Fixed in Sprint 14 with 0 Follow-Up Questions",
      toolsUsed: ["Jira", "Linear", "DevTools Console Logs", "Loom Reproduction"]
    }
  }
];

