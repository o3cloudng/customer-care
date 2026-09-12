import React, { useState } from 'react';
import { SectionId } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

interface CoverLetterSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const CoverLetterSection: React.FC<CoverLetterSectionProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const letterText = `
Dear Hiring Team,

I am writing to express my strong interest in joining your organization as a Customer Success & Technical Support Specialist. With over 5 years of hands-on experience spanning Tier 2/3 software support, technical diagnostics, and client-facing operations, I specialize in diagnosing complex SaaS issues, maintaining SLA excellence, and translating backend intricacies into clear, reassuring solutions for clients and stakeholders.

In my recent role as Technical Systems Support Lead & Scrum Master at Biznovate Tech, I served as the critical link between enterprise customers and engineering teams on a Python/Django SaaS platform. Whether diagnosing root causes across REST APIs, PostgreSQL, MySQL, and Redis, or running Docker and Elasticsearch log investigations, I consistently maintained a 98%+ SLA compliance rate on high-priority tickets while reducing our average Mean Time to Resolution (MTTR) by 30%. Crucially, by pairing deep technical troubleshooting with clear, empathetic client communication, I maintained a 95% Customer Satisfaction (CSAT) score.

Prior to that, at TM30 Global, I owned client accounts end-to-end for web platforms, custom telemetry software, and database integrations for mobile network operator (MNO) clients. I analyzed application logs and PostgreSQL/MySQL database queries to eliminate recurring errors, coordinated incident resolution workflows across dev and product teams using Jira and Microsoft DevOps, and authored technical documentation and onboarding manuals that reduced incoming ticket volume by 20%.

Here is what I bring to your technical support and customer success operations:
• Tier 2/3 Technical Diagnostics & Debugging: Practical troubleshooting across REST APIs, PostgreSQL, MySQL, Redis, Linux/Unix environments, and Docker container logs to pinpoint root causes swiftly.
• SLA & Incident Leadership: Proven track record of managing ticketing queues under strict SLA deadlines, facilitating Agile ceremonies in Jira, and leading escalations with zero dropped balls.
• Customer Success & Clear Translation: Skilled at breaking down intricate architectural constraints into simple, actionable steps for non-technical users, preserving trust and driving product adoption.
• Proactive Documentation & Ticket Deflection: Deep commitment to authoring robust knowledge base articles, standard operating procedures, and onboarding guides that deflect recurring issues.
• Global Remote Reliability: Fully set up with dedicated remote infrastructure and proven flexibility across US, UK, and European time zones.

Having earned my Bachelor of Engineering (B.Eng.) in Electronics & Electrical Engineering from LAUTECH, complemented by professional certifications in Customer Support from HubSpot and Advanced Customer Service from La Plage Meta Verse, I combine rigorous engineering analytical thinking with frontline customer empathy.

I would welcome the opportunity to discuss how my technical diagnostics skills, SLA discipline, and passion for customer success can contribute to your team's goals. Thank you for your time and consideration.

Warm regards,

${PERSONAL_INFO.name}
Customer Success & Technical Support Specialist
${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone} | https://olumide-support.vercel.app
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Executive Cover Letter
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Customer Success & Technical Support Pitch
          </h1>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 shadow-xs inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
          <span>{copied ? 'Copied Letter!' : 'Copy Letter Text'}</span>
        </button>
      </div>

      {/* Styled Letter Document */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        
        <div className="border-b border-slate-100 pb-4 text-xs text-slate-500 space-y-1">
          <p><strong>From:</strong> {PERSONAL_INFO.name} ({PERSONAL_INFO.email})</p>
          <p><strong>Position:</strong> Customer Success & Technical Support Specialist</p>
          <p><strong>Location:</strong> Nigeria (Remote | US, UK & European Time Zone Flexible)</p>
        </div>

        <div className="space-y-4">
          <p>Dear Hiring Team,</p>

          <p>
            I am writing to express my strong interest in joining your organization as a <strong className="text-slate-900 font-semibold">Customer Success & Technical Support Specialist</strong>. With over 5 years of hands-on experience spanning Tier 2/3 software support, technical diagnostics, and client-facing operations, I specialize in diagnosing complex SaaS issues, maintaining SLA excellence, and translating backend intricacies into clear, reassuring solutions for clients and stakeholders.
          </p>

          <p>
            In my recent role as <strong className="text-slate-900 font-semibold">Technical Systems Support Lead & Scrum Master</strong> at Biznovate Tech, I served as the critical link between enterprise customers and engineering teams on a Python/Django SaaS platform. Whether diagnosing root causes across REST APIs, PostgreSQL, MySQL, and Redis, or running Docker and Elasticsearch log investigations, I consistently maintained a <strong className="text-slate-900 font-semibold">98%+ SLA compliance rate</strong> on high-priority tickets while reducing our average Mean Time to Resolution (MTTR) by 30%. Crucially, by pairing deep technical troubleshooting with clear, empathetic client communication, I maintained a <strong className="text-slate-900 font-semibold">95% Customer Satisfaction (CSAT) score</strong>.
          </p>

          <p>
            Prior to that, at <strong className="text-slate-900 font-semibold">TM30 Global</strong>, I owned client accounts end-to-end for web platforms, custom telemetry software, and database integrations for mobile network operator (MNO) clients. I analyzed application logs and PostgreSQL/MySQL database queries to eliminate recurring errors, coordinated incident resolution workflows across dev and product teams using Jira and Microsoft DevOps, and authored technical documentation and onboarding manuals that reduced incoming ticket volume by 20%.
          </p>

          <p className="font-semibold text-slate-900 pt-1">
            Here is what I bring to your technical support and customer success operations:
          </p>

          <ul className="space-y-2.5 pl-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Tier 2/3 Technical Diagnostics & Debugging:</strong> Practical troubleshooting across REST APIs, PostgreSQL, MySQL, Redis, Linux/Unix environments, and Docker container logs to pinpoint root causes swiftly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>SLA & Incident Leadership:</strong> Proven track record of managing ticketing queues under strict SLA deadlines, facilitating Agile ceremonies in Jira, and leading escalations with zero dropped balls.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Customer Success & Clear Translation:</strong> Skilled at breaking down intricate architectural constraints into simple, actionable steps for non-technical users, preserving trust and driving product adoption.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Proactive Documentation & Ticket Deflection:</strong> Deep commitment to authoring robust knowledge base articles, standard operating procedures, and onboarding guides that deflect recurring issues.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Global Remote Reliability:</strong> Fully set up with dedicated remote infrastructure and proven flexibility across US, UK, and European time zones.</span>
            </li>
          </ul>

          <p className="pt-2">
            Having earned my Bachelor of Engineering (B.Eng.) in Electronics & Electrical Engineering from LAUTECH, complemented by professional certifications in Customer Support from HubSpot and Advanced Customer Service from La Plage Meta Verse, I combine rigorous engineering analytical thinking with frontline customer empathy.
          </p>

          <p>
            I would welcome the opportunity to discuss how my technical diagnostics skills, SLA discipline, and passion for customer success can contribute to your team's goals. Thank you for your time and consideration.
          </p>

          <div className="pt-4 space-y-1">
            <p>Warm regards,</p>
            <p className="font-bold text-slate-900">{PERSONAL_INFO.name}</p>
            <p className="text-xs text-slate-500">Customer Success & Technical Support Specialist</p>
          </div>
        </div>

      </div>

      {/* Direct Contact Button */}
      <div className="flex items-center justify-between p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
        <div className="space-y-0.5">
          <h2 className="text-sm font-bold text-indigo-900">
            Ready to start a conversation?
          </h2>
          <p className="text-xs text-indigo-700">
            Reach out directly by email or phone—I respond within 2 hours.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
