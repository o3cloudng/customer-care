import React, { useState } from 'react';
import { SectionId } from '../../types';
import { 
  PERSONAL_INFO, 
  KEY_METRICS 
} from '../../data/portfolioData';
import { 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check,
  Globe2,
  Clock
} from 'lucide-react';

interface ResumeExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const RESUME_EXPERIENCE: ResumeExperienceItem[] = [
  {
    role: "Technical Systems Support Lead & Scrum Master",
    company: "Biznovate Tech",
    location: "Lagos, Nigeria",
    period: "Jan 2020 – Present",
    achievements: [
      "Served as Technical Support Lead and Scrum Master across a Python/Django SaaS platform, acting as the primary liaison between engineering teams and enterprise stakeholders.",
      "Facilitated Agile sprint ceremonies (planning, stand-ups, retrospectives) using Jira and Trello, maintaining on-time delivery schedules across cross-functional teams.",
      "Delivered Tier 2/3 incident resolution across APIs, PostgreSQL, MySQL, and Redis, maintaining 98%+ SLA compliance on high-priority tickets.",
      "Utilized Elasticsearch and Docker log analysis to debug complex server and search issues, decreasing average Mean Time to Resolution (MTTR) by 30%.",
      "Translated complex backend constraints into actionable guidance for non-technical clients, driving a 95% Customer Satisfaction (CSAT) score."
    ]
  },
  {
    role: "Technical Support & Systems Specialist",
    company: "TM30 Global",
    location: "Lagos, Nigeria",
    period: "Jan 2019 – Jan 2020",
    achievements: [
      "Delivered Tier 2 and Tier 3 technical support for web platforms, custom telemetry software, and database integrations, serving as primary interface between the engineering team and mobile network operator (MNO) clients.",
      "Owned multiple client accounts end-to-end, maintaining open communication with subscribers and resolving issues and bugs within SLA.",
      "Analyzed application logs and PostgreSQL/MySQL database queries to identify, debug, and resolve root causes of recurring software errors.",
      "Coordinated incident resolution workflows across development and product teams using Jira and Microsoft DevOps to maintain SLA compliance.",
      "Authored end-user manuals, technical documentation, and onboarding guides, reducing client support ticket volume by 20%.",
      "Managed Docker container configurations and local server environments to maintain system uptime and continuous software availability."
    ]
  }
];

const RESUME_EDUCATION = [
  {
    degree: "Bachelor of Engineering (B.Eng.), Electronics & Electrical Engineering",
    institution: "Ladoke Akintola University of Technology (LAUTECH)",
    location: "Ogbomoso, Nigeria",
    year: "2007"
  }
];

const RESUME_CERTIFICATIONS = [
  {
    name: "Advanced Customer Service",
    issuer: "La Plage Meta Verse"
  },
  {
    name: "Customer Support",
    issuer: "HubSpot"
  },
  {
    name: "Customer Service Fundamentals (In progress)",
    issuer: "Elevify"
  }
];

const RESUME_ADDITIONAL_INFO = {
  languages: "English (Native / Professional Fluency)",
  workPreference: "Remote, Full-time — Flexible across US, UK, and European time zones"
};

interface ResumeSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `
${PERSONAL_INFO.name}
Customer Success & Technical Support Specialist
Nigeria | Remote | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | https://olumide-support.vercel.app

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

CORE METRICS
- CSAT: 97.8% average customer satisfaction across 4,500+ tickets
- Chat First Response Time: < 1.8 minutes
- First Contact Resolution (FCR): 94.2%
- SLA Compliance: 99.4%

CORE COMPETENCIES
- Platforms: Zendesk Support & Guide, Intercom, Freshdesk, HubSpot, Salesforce Service Cloud
- Customer Care: Conflict De-escalation, Empathetic Communication, Active Listening, Retention
- Operations: Knowledge Base Authoring, Loom Video Walkthroughs, Slack, Notion, Cross-functional Handoffs

PROFESSIONAL EXPERIENCE
${RESUME_EXPERIENCE.map(item => `
${item.role} | ${item.period}
${item.company} — ${item.location}
${item.achievements.map(a => `${a}`).join('\n')}
`).join('\n')}

EDUCATION
${RESUME_EDUCATION.map(e => `${e.degree}\n${e.institution}, ${e.location} — ${e.year}`).join('\n')}

CERTIFICATIONS & TRAINING
${RESUME_CERTIFICATIONS.map(c => `${c.name} - ${c.issuer}`).join('\n')}

ADDITIONAL INFORMATION
Languages: ${RESUME_ADDITIONAL_INFO.languages}
Work Preference: ${RESUME_ADDITIONAL_INFO.workPreference}
    `.trim();

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Action Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs print:hidden">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Curriculum Vitae / Resume
          </h1>
          <p className="text-xs text-slate-500">
            ATS-optimized format tailored for Customer Support & Experience roles.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyText}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
            title="Copy plain text resume for ATS applications"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied ATS Text!' : 'Copy Plain Text'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium inline-flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Clean Printable Paper Sheet */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 print:border-none print:shadow-none print:p-0">
        
        {/* Resume Header */}
        <div className="border-b border-slate-200 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <span className="text-sm font-semibold text-indigo-600">
              {PERSONAL_INFO.title}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              {PERSONAL_INFO.email}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              {PERSONAL_INFO.phone}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {PERSONAL_INFO.location} (Global Remote)
            </span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Professional Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Core Benchmarks */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Key Performance Metrics
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {KEY_METRICS.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-lg font-bold text-indigo-600 block">{m.value}</span>
                <span className="text-[11px] font-semibold text-slate-700 block">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Platforms */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Platforms & Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div>
              <strong className="block text-slate-900 mb-1">Helpdesk & CRM:</strong>
              Zendesk Support & Guide, Intercom, Freshdesk, HubSpot Service Hub, Salesforce Service Cloud.
            </div>
            <div>
              <strong className="block text-slate-900 mb-1">Customer Care:</strong>
              Conflict De-escalation, Empathetic Communication, Active Listening, VIP Support, Customer Retention.
            </div>
            <div>
              <strong className="block text-slate-900 mb-1">Tools & Productivity:</strong>
              Loom (Video Walkthroughs), Notion, Slack, Google Workspace, Jira Service Management.
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Professional Experience
          </h3>

          <div className="space-y-6">
            {RESUME_EXPERIENCE.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="text-sm font-bold text-slate-900">{item.role}</span>
                    <span className="text-xs text-indigo-600 font-medium sm:ml-2 block sm:inline">
                      @ {item.company}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.period} | {item.location}
                  </span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Education
            </h3>
            {RESUME_EDUCATION.map((edu, idx) => (
              <div key={idx} className="text-xs text-slate-700 space-y-0.5">
                <p className="font-semibold text-slate-900">{edu.degree}</p>
                <p className="text-slate-600">{edu.institution}, {edu.location} — {edu.year}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Certifications & Training
            </h3>
            <ul className="space-y-1 text-xs text-slate-700">
              {RESUME_CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{cert.name} — {cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Information */}
        <div className="pt-4 border-t border-slate-200 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Additional Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <Globe2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900 block">Languages:</span>
                <span>{RESUME_ADDITIONAL_INFO.languages}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900 block">Work Preference:</span>
                <span>{RESUME_ADDITIONAL_INFO.workPreference}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
