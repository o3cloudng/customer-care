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
  HeartHandshake,
  Send
} from 'lucide-react';

interface CoverLetterSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const CoverLetterSection: React.FC<CoverLetterSectionProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const letterText = `
Dear Hiring Team,

I am writing to express my enthusiastic interest in joining your team as a Customer Support & Experience Specialist. Having managed over 4,500 customer interactions across live chat, email, and ticketing, I have built my career around a simple philosophy: great customer support is about active empathy, clear communication, and rapid, stress-free problem resolution.

In my recent frontline roles, I have consistently maintained a 97.8% average CSAT score and a sub-2-minute First Response Time on live chat. When a user reaches out frustrated—whether by an unexpected billing charge, confusion during onboarding, or an urgent account lockout—I don't offer generic canned answers. I listen deeply, validate their frustration, take personal ownership of their issue, and guide them to a clear, lasting resolution.

Here is what I bring to your customer care operations:
• Frontline Platform Fluency: Daily hands-on mastery of Zendesk Support & Guide, Intercom inboxes, Freshdesk, Slack, and Loom.
• Proven Conflict De-escalation: An established track record of turning panicked or churn-risk customers into loyal brand advocates through calm, human reassurance.
• Self-Serve Knowledge Creation: I don't just answer tickets; I turn recurring user questions into searchable Help Center articles and short video walkthroughs that deflect future tickets.
• High Reliability & Timezone Flexibility: Fully equipped with a dedicated, quiet home office, redundant high-speed fiber connections, and full availability to cover US, UK, and European business hours.

I would welcome the opportunity to discuss how my customer-first mindset, de-escalation skills, and reliable work ethic can elevate your customer support team. Thank you for your time and consideration.

Warm regards,

${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
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
            Why I'm passionate about customer support
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
          <p><strong>Position:</strong> Customer Support & Experience Specialist</p>
          <p><strong>Location:</strong> {PERSONAL_INFO.location} (Remote Ready)</p>
        </div>

        <div className="space-y-4">
          <p>Dear Hiring Team,</p>

          <p>
            I am writing to express my enthusiastic interest in joining your team as a <strong className="text-slate-900 font-semibold">Customer Support & Experience Specialist</strong>. Having managed over 4,500 customer interactions across live chat, email, and ticketing, I have built my career around a simple philosophy: <em>great customer support is about active empathy, clear communication, and rapid, stress-free problem resolution.</em>
          </p>

          <p>
            In my recent frontline roles, I have consistently maintained a <strong className="text-slate-900 font-semibold">97.8% average CSAT score</strong> and a <strong className="text-slate-900 font-semibold">sub-2-minute First Response Time</strong> on live chat. When a user reaches out frustrated—whether by an unexpected billing charge, confusion during onboarding, or an urgent account lockout—I don't offer generic canned answers. I listen deeply, validate their frustration, take personal ownership of their issue, and guide them to a clear, lasting resolution.
          </p>

          <p className="font-semibold text-slate-900 pt-1">
            Here is what I bring to your customer care operations:
          </p>

          <ul className="space-y-2.5 pl-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Frontline Platform Fluency:</strong> Daily hands-on mastery of Zendesk Support & Guide, Intercom inboxes, Freshdesk, Slack, and Loom.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Proven Conflict De-escalation:</strong> An established track record of turning panicked or churn-risk customers into loyal brand advocates through calm, human reassurance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>Self-Serve Knowledge Creation:</strong> I don't just answer tickets; I turn recurring user questions into searchable Help Center articles and short video walkthroughs that deflect future tickets.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span><strong>High Reliability & Timezone Flexibility:</strong> Fully equipped with a dedicated, quiet home office, redundant high-speed fiber connections, and full availability to cover US, UK, and European business hours.</span>
            </li>
          </ul>

          <p className="pt-2">
            I would welcome the opportunity to discuss how my customer-first mindset, de-escalation skills, and reliable work ethic can elevate your customer support team. Thank you for your time and consideration.
          </p>

          <div className="pt-4 space-y-1">
            <p>Warm regards,</p>
            <p className="font-bold text-slate-900">{PERSONAL_INFO.name}</p>
            <p className="text-xs text-slate-500">{PERSONAL_INFO.title}</p>
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
