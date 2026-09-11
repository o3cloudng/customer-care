import React, { useState } from 'react';
import { SectionId } from '../../types';
import { 
  PERSONAL_INFO, 
  KEY_METRICS, 
  EXPERIENCE_ITEMS, 
  EDUCATION_ITEMS, 
  CERTIFICATIONS 
} from '../../data/portfolioData';
import { 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check,
  Star,
  FileText
} from 'lucide-react';

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
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}

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

WORK EXPERIENCE
${EXPERIENCE_ITEMS.map(item => `
${item.role} — ${item.company} (${item.period})
${item.summary}
Key Achievements:
${item.achievements.map(a => `• ${a}`).join('\n')}
`).join('\n')}

EDUCATION
${EDUCATION_ITEMS.map(e => `${e.degree} - ${e.institution}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS.map(c => `${c.name} (${c.issuer})`).join('\n')}
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

        {/* Experience Section */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Work Experience
          </h3>

          <div className="space-y-6">
            {EXPERIENCE_ITEMS.map((item, idx) => (
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

                <p className="text-xs text-slate-600 italic">
                  {item.summary}
                </p>

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
            {EDUCATION_ITEMS.map((edu, idx) => (
              <div key={idx} className="text-xs text-slate-700">
                <p className="font-semibold text-slate-900">{edu.degree}</p>
                <p className="text-slate-600">{edu.institution}, {edu.location}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Certifications & Training
            </h3>
            <ul className="space-y-1 text-xs text-slate-700">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{cert.name} — {cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};
