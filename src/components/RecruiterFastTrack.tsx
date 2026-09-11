import React, { useState } from 'react';
import { PERSONAL_INFO, RECRUITER_FAST_FACTS } from '../data/portfolioData';
import { 
  Zap, 
  Clock, 
  Globe2, 
  Laptop, 
  Wifi, 
  BatteryCharging, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface RecruiterFastTrackProps {
  onNavigateToResume?: () => void;
  onNavigateToContact?: () => void;
}

export const RecruiterFastTrack: React.FC<RecruiterFastTrackProps> = ({
  onNavigateToResume,
  onNavigateToContact
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div 
      id="recruiter-fast-track-card"
      className="rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-indigo-500/20 relative overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="relative z-10 space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              RECRUITER 30-SECOND FIT CARD
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span>Why Hire {PERSONAL_INFO.name}?</span>
              <Award className="w-6 h-6 text-amber-400" />
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              High-impact frontline support specialist. Pre-trained on modern SaaS stacks, Day-1 operational, with zero ramp-up lag.
            </p>
          </div>

          {/* Direct Scheduling Button */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Customer%20Support%20Role`}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-indigo-400"
              id="recruiter-fast-invite-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 15-Min Screen</span>
            </a>

            {onNavigateToResume && (
              <button
                onClick={onNavigateToResume}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/15 inline-flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-white/40"
                id="recruiter-fast-resume-btn"
              >
                <FileText className="w-4 h-4 text-indigo-300" />
                <span>View Full Resume</span>
              </button>
            )}
          </div>
        </div>

        {/* 6 Key Recruiter Decision Factors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* 1. Notice & Availability */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Notice & Start Date</span>
            </div>
            <p className="text-base font-bold text-white">
              Immediate (0 Days Notice)
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ready to start next business day. Open to Full-Time (40 hrs/wk) Remote or Long-Term Contract.
            </p>
          </div>

          {/* 2. Timezone Alignment */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Timezone Coverage</span>
            </div>
            <p className="text-base font-bold text-white">
              100% US & European Overlap
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full shift overlap with US Eastern (EST), US Pacific (PST), UK (GMT), and Central Europe (CET).
            </p>
          </div>

          {/* 3. Proven CSAT & FCR */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Performance Track Record</span>
            </div>
            <p className="text-base font-bold text-white">
              97.8% CSAT &lt; 1.8 min FRT
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              4,500+ tickets resolved. 94.2% First Contact Resolution across live chat and email.
            </p>
          </div>

          {/* 4. English & Communication */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Globe2 className="w-4 h-4 text-sky-400" />
              <span>Language Proficiency</span>
            </div>
            <p className="text-base font-bold text-white">
              C2 Bilingual Fluency
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clear, natural, empathetic English tone. Zero robotic jargon. Professional vocal clarity.
            </p>
          </div>

          {/* 5. Uninterrupted Power & Hardware */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <BatteryCharging className="w-4 h-4 text-emerald-400" />
              <span>Hardware & Power Backup</span>
            </div>
            <p className="text-base font-bold text-white">
              M2 Mac + Dual UPS Inverters
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              MacBook Pro M2, dual monitors, Jabra headset. 100% power redundancy (zero dropouts).
            </p>
          </div>

          {/* 6. High-Speed Internet Redundancy */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Wifi className="w-4 h-4 text-indigo-400" />
              <span>Connectivity Redundancy</span>
            </div>
            <p className="text-base font-bold text-white">
              150 Mbps Fiber + 4G Failover
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              High-speed primary fiber line with automatic 50 Mbps LTE mobile hotspot backup.
            </p>
          </div>

        </div>

        {/* Bottom Fast Contact & Tool Badges */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 text-xs">
          
          <div className="flex flex-wrap items-center gap-2 text-slate-300">
            <span className="text-slate-400 font-medium">Stack Mastery:</span>
            {['Zendesk Suite', 'Intercom', 'Freshdesk', 'Salesforce', 'Slack', 'Loom', 'Notion', 'Stripe'].map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded-md bg-white/10 text-white font-medium border border-white/10">
                {tool}
              </span>
            ))}
          </div>

          {/* Fast Copy Pills */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'recruiter-email')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
              title="Copy Email"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-300" />
              <span>{PERSONAL_INFO.email}</span>
              {copiedItem === 'recruiter-email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'recruiter-phone')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
              title="Copy Phone"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-300" />
              <span>{PERSONAL_INFO.phone}</span>
              {copiedItem === 'recruiter-phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
