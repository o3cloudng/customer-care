import React from 'react';
import { SectionId } from '../../types';
import { 
  HeartHandshake, 
  Search, 
  CheckCircle2, 
  BookOpen, 
  Smile, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  Video
} from 'lucide-react';

interface HowIWorkSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const HowIWorkSection: React.FC<HowIWorkSectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Listen, Acknowledge & Validate',
      subtitle: 'Empathy first, before explanation',
      description: 'When a customer reaches out frustrated, they first need to know their stress is acknowledged. I validate their experience, apologize for the friction, and assure them that I will personally see this through to completion.',
      bestPractice: 'Never copy-paste generic corporate disclaimers. Speak like a real human who cares.'
    },
    {
      step: '02',
      title: 'Clarify the Real Goal',
      subtitle: 'Understanding the user’s workflow',
      description: 'Often, what a user asks for is different from what they actually need. I ask gentle, targeted questions to understand their intended workflow without making them feel interrogated or technically deficient.',
      bestPractice: 'Ask: "To make sure I guide you correctly, what outcome are you aiming for today?"'
    },
    {
      step: '03',
      title: 'Deliver Jargon-Free Guidance',
      subtitle: 'Bite-sized steps, screenshots & videos',
      description: 'I avoid internal jargon or complex terminology. I provide numbered, one-action-at-a-time instructions, clear visual screenshots, or a quick 90-second Loom recording showing the exact clicks.',
      bestPractice: 'Visual clarity prevents repeated back-and-forth and keeps First Contact Resolution high.'
    },
    {
      step: '04',
      title: 'Confirm Complete Satisfaction',
      subtitle: 'Never close a ticket prematurely',
      description: 'Before closing an interaction, I confirm that the user has verified the solution on their end and has everything they need. If applicable, I share a quick shortcut or pro-tip to help their workflow.',
      bestPractice: 'Always ask: "Does that completely take care of it for you, or is there anything else I can check?"'
    },
    {
      step: '05',
      title: 'Document & Prevent Recurring Issues',
      subtitle: 'Closing the loop with the team',
      description: 'If a question came up twice this week, it will come up again. I turn common stumbling blocks into searchable Help Center articles and share direct customer feedback with the product team.',
      bestPractice: 'Support isn’t just a cost center—it’s the company’s most direct product intelligence channel.'
    }
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Support Methodology
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          A proven 5-step framework for resolving customer inquiries.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          How I consistently maintain a 97%+ CSAT score and turn stressful customer interactions into long-term brand loyalty.
        </p>
      </div>

      {/* 2. Step by Step Cards */}
      <div className="space-y-5">
        {steps.map((item, idx) => (
          <div 
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-200 transition-colors space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
                  {item.step}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <span className="text-xs text-indigo-600 font-medium">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2.5 text-xs text-slate-700">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span><strong>Key Principle:</strong> {item.bestPractice}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Communication Tone Rules */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Tone & Style Guidelines
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            How I communicate with customers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-100/70 space-y-2">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
              What I Avoid
            </span>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
              <li>"Per our terms of service, we do not issue refunds."</li>
              <li>"You need to clear your cache and cookies first."</li>
              <li>"That feature is not supported. Is there anything else?"</li>
              <li>Generic scripted greetings that ignore their urgent message.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-100/70 space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              What I Say Instead
            </span>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
              <li>"I understand why this charge surprised you—let me take care of this for you right now."</li>
              <li>"Let's test this together—here is a quick 2-step test we can try in 30 seconds."</li>
              <li>"While that button doesn't exist today, here is an easy shortcut that gets you the exact same result."</li>
              <li>"I am personally staying with you on this chat until you're completely back in your account."</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Check out the tools and platforms I use daily
          </h3>
          <p className="text-xs text-slate-600">
            From Zendesk and Intercom to Notion, Loom, and Slack.
          </p>
        </div>
        <button
          onClick={() => onNavigate('skills')}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <span>View Skills & Tools</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
