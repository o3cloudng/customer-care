import React from 'react';
import { SectionId } from '../../types';
import { KEY_METRICS } from '../../data/portfolioData';
import { 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Smile,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface CustomerSuccessSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const CustomerSuccessSection: React.FC<CustomerSuccessSectionProps> = ({ onNavigate }) => {
  const retentionPillars = [
    {
      title: "Early Churn Detection",
      icon: TrendingUp,
      subtitle: "Spotting dissatisfaction before cancellation",
      description: "Frustrated customers often show subtle signs—repeated questions about basic workflows, sharp changes in tone, or silence after a bad experience. I identify these accounts and reach out with personalized guidance to protect the relationship.",
      benefit: "Saves high-value subscriptions before they reach cancellation."
    },
    {
      title: "Frictionless User Onboarding",
      icon: Users,
      subtitle: "Guiding new users to their 'Aha!' moment",
      description: "When a customer signs up, the first 7 days determine long-term retention. I provide friendly, jargon-free walk-throughs, custom video guides, and quick-start checklists so non-technical users feel confident and capable.",
      benefit: "Reduces first-week trial drop-off by up to 35%."
    },
    {
      title: "Voice-of-Customer Advocacy",
      icon: MessageSquare,
      subtitle: "Bringing frontline insights to product teams",
      description: "Frontline support agents hear the truth about product flaws every single hour. I categorize and summarize customer feedback into actionable reports so product managers know which friction points to fix first.",
      benefit: "Eliminates recurring customer pain points at the source."
    },
    {
      title: "Proactive Knowledge Base Deflection",
      icon: BookOpen,
      subtitle: "Empowering users to find answers in seconds",
      description: "Great customer care includes respecting the user's time. I write crystal-clear, searchable help articles with annotated screenshots and video clips that allow customers to solve simple questions instantly.",
      benefit: "Deflects over 20% of repetitive incoming inquiries."
    }
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Customer Retention & Experience
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Turning frontline customer support into a retention engine.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Customer support is often the only human touchpoint a customer experiences. When users encounter a problem, their decision to stay or churn is won by the empathy, speed, and helpfulness of support.
        </p>
      </div>

      {/* Retention Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {retentionPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 hover:border-indigo-200 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h2>
                  <span className="text-xs text-indigo-600 font-medium">
                    {pillar.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{pillar.benefit}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSAT Strategy Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Satisfaction Metrics
          </span>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            How I maintain a 97.8% CSAT Rating
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 block">1. Personal Connection</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Addressing customers by name, matching their tone, and showing genuine warmth rather than stiff corporate formality.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 block">2. Solution Confirmation</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Confirming that the user has verified the fix on their end before closing out the conversation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 block">3. Value-Add Tips</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Providing a helpful related shortcut or FAQ link so the customer feels empowered and delighted.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-slate-100 border border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            See real resolution stories
          </h3>
          <p className="text-xs text-slate-600">
            Read how I de-escalated billing disputes and retained high-risk customer accounts.
          </p>
        </div>
        <button
          onClick={() => onNavigate('case-studies')}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <span>View Support Scenarios</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
