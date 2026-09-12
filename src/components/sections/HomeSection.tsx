import React, { useState } from 'react';
import { SectionId } from '../../types';
import { 
  PERSONAL_INFO, 
  KEY_METRICS, 
  SUPPORT_PRINCIPLES,
  SUPPORT_SCENARIOS 
} from '../../data/portfolioData';
import { 
  HeartHandshake, 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Clock, 
  Smile, 
  ShieldCheck, 
  MessageSquare, 
  BookOpen, 
  Sparkles, 
  Check, 
  Copy,
  Users,
  ExternalLink,
  ChevronRight,
  Headphones
} from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(type);
    setTimeout(() => setCopiedContact(null), 2000);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      
      {/* 1. HERO SECTION: Clean, Human, Empathetic */}
      <section className="relative pt-4 pb-8 md:pt-8 md:pb-12">
        <div className="max-w-4xl space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-medium text-indigo-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span>Available for Full-Time Remote Customer Support Roles</span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Turning customer frustration into <span className="text-indigo-600 underline decoration-indigo-200 decoration-wavy decoration-2">lasting loyalty</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl pt-1">
              Hi, I'm <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</strong>. I'm a Customer Support & Experience Specialist who believes great customer care is built on active empathy, clear communication, and rapid, stress-free problem resolution.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('case-studies')}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm inline-flex items-center gap-2 shadow-sm shadow-indigo-500/20 transition-all hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-indigo-500"
              id="hero-view-scenarios-btn"
            >
              <span>Explore Support Scenarios</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('resume')}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-300/80 inline-flex items-center gap-2 shadow-xs transition-all hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-indigo-500"
              id="hero-view-resume-btn"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>View Resume</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm transition-colors inline-flex items-center gap-2"
              id="hero-contact-btn"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Contact Copy Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500">
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 transition-colors shadow-2xs"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-500" />
              <span>{PERSONAL_INFO.email}</span>
              {copiedContact === 'email' ? (
                <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                  <Check className="w-3 h-3" /> Copied!
                </span>
              ) : (
                <Copy className="w-3 h-3 text-slate-400" />
              )}
            </button>

            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 transition-colors shadow-2xs"
              title="Click to copy phone number"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-500" />
              <span>{PERSONAL_INFO.phone}</span>
              {copiedContact === 'phone' ? (
                <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                  <Check className="w-3 h-3" /> Copied!
                </span>
              ) : (
                <Copy className="w-3 h-3 text-slate-400" />
              )}
            </button>
          </div>

        </div>
      </section>

      {/* 2. VERIFIED SUPPORT METRICS: Light, Airy Cards */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              Proven Performance Benchmarks
            </h2>
            <p className="text-xs text-slate-500">
              Aggregated frontline performance metrics across live chat, email, and ticketing.
            </p>
          </div>
          <span className="text-[11px] font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md self-start sm:self-auto">
            4,500+ Tickets Handled
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KEY_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-bold text-indigo-600 tracking-tight">
                    {metric.value}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                    {idx === 0 ? <Smile className="w-4 h-4" /> : idx === 1 ? <Clock className="w-4 h-4" /> : idx === 2 ? <CheckCircle2 className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 mt-2">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE 15-SECOND RECRUITER SNAPSHOT: Uncongested Summary */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Recruiter & Hiring Manager Quick Pitch
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Why I am an immediate asset to your Customer Care team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              Master of De-escalation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Skilled at turning around angry or panicked customers (e.g., unexpected billing charges, broken workflows) through active validation, calm reassurance, and speedy corrective action.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              Fluent in Modern Support Tools
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deep, daily experience with Zendesk Support & Guide, Intercom inboxes, Freshdesk, Slack, Loom, and HubSpot. Quick to adopt new internal platforms with zero friction.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              Proactive Knowledge Creator
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              I don't just solve tickets—I turn recurring questions into clear, searchable Help Center articles and short Loom videos that deflect incoming volume and empower users.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOUR PILLARS OF CUSTOMER CARE */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            How I Approach Every Customer Interaction
          </h2>
          <p className="text-sm text-slate-500">
            Four guiding principles that ensure high satisfaction and lifelong account retention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SUPPORT_PRINCIPLES.map((principle, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-200 transition-colors space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  {idx === 0 ? <HeartHandshake className="w-5 h-5" /> : idx === 1 ? <MessageSquare className="w-5 h-5" /> : idx === 2 ? <ShieldCheck className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {principle.title}
                  </h3>
                  <span className="text-xs text-indigo-600 font-medium">
                    {principle.tagline}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED SUPPORT SCENARIOS PREVIEW */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Featured Support Scenarios
            </h2>
            <p className="text-sm text-slate-500">
              Real-world examples of de-escalating tricky customer situations, resolving issues, and retaining accounts.
            </p>
          </div>
          <button
            onClick={() => onNavigate('case-studies')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors self-start sm:self-auto"
          >
            <span>View All 5 Scenarios</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SUPPORT_SCENARIOS.slice(0, 2).map((scenario) => (
            <div 
              key={scenario.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {scenario.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {scenario.channel}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {scenario.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {scenario.summary}
                </p>

                {/* Incoming customer message quote */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 italic">
                  "{scenario.incomingMessage.slice(0, 140)}..."
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {scenario.csatScore.split(' ')[0]} Rating
                </span>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Read Full Case</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION: Direct Connection */}
      <section className="p-8 sm:p-10 rounded-3xl bg-indigo-600 text-white shadow-md shadow-indigo-600/15 space-y-6">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
            Let's Collaborate
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to deliver exceptional care to your customers?
          </h2>
          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
            I am actively interviewing for international remote Customer Support Specialist, Customer Care Representative, and Customer Experience roles.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-indigo-50 shadow-sm transition-all"
            id="cta-contact-btn"
          >
            Contact Olumide
          </button>
          <button
            onClick={() => onNavigate('resume')}
            className="px-6 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-medium text-sm transition-all border border-indigo-500"
            id="cta-resume-btn"
          >
            View Complete Resume
          </button>
        </div>
      </section>

    </div>
  );
};
