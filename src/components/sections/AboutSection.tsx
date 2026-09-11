import React from 'react';
import { SectionId } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  HeartHandshake, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Smile, 
  Headphones, 
  BookOpen, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Mail
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-20 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          About & Core Philosophy
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Delivering empathetic, human-first customer care.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          I help modern companies build deep, enduring relationships with their users by solving problems with patience, clarity, and genuine human warmth.
        </p>
      </div>

      {/* 2. My Story & Background */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Throughout my career in customer support, I've learned that when users reach out to support, they are rarely just asking a factual question—they are experiencing an interruption in their workday, feeling anxiety about a billing charge, or feeling overwhelmed by a new tool.
          </p>
          <p>
            My approach begins with <strong className="text-slate-900 font-semibold">active validation</strong>: acknowledging their feelings and taking complete ownership of the situation. Whether it's guiding a non-technical small business owner through account permissions, resolving an urgent access issue before an important meeting, or defusing a tense billing misunderstanding, I treat every customer like an important partner.
          </p>
          <p>
            I pair this empathy with high operational efficiency. Having resolved over 4,500 customer conversations, I pride myself on maintaining a <strong className="text-slate-900 font-semibold">97.8% CSAT</strong> and a <strong className="text-slate-900 font-semibold">sub-2-minute chat response time</strong> without ever resorting to robotic, unhelpful canned answers.
          </p>
        </div>

        {/* Highlight Quote */}
        <div className="p-5 rounded-xl bg-indigo-50/70 border-l-4 border-indigo-500 text-indigo-900 text-sm sm:text-base font-medium italic">
          "A great customer support experience doesn't just solve a problem—it turns a momentarily frustrated user into your company's biggest advocate."
        </div>
      </section>

      {/* 3. The 4 Channels I Support */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Omnichannel Support Capabilities
          </h2>
          <p className="text-sm text-slate-500">
            Tailoring communication style and resolution depth across every customer touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PERSONAL_INFO.channels.map((channel, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 hover:border-indigo-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  {idx === 0 ? <MessageCircle className="w-5 h-5" /> : idx === 1 ? <Mail className="w-5 h-5" /> : idx === 2 ? <Users className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {channel.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {channel.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Remote Reliability & Work Setup */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Work Environment & Reliability
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Built for High-Performance Remote Support
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
              <Globe2 className="w-4 h-4" />
              <span>Timezone Flexibility</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comfortable working across US (EST/PST), UK/CET, and European business hours for continuous queue coverage.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
              <Zap className="w-4 h-4" />
              <span>Uninterrupted Power & Internet</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with redundant high-speed fiber internet and dual power backup systems ensuring 99.9% remote uptime.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
              <Headphones className="w-4 h-4" />
              <span>Quiet Dedicated Workspace</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ergonomic, distraction-free home office setup equipped for clear voice calls and focused queue management.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Navigation Footer CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-slate-100 border border-slate-200/80">
        <div className="space-y-0.5">
          <h3 className="text-sm font-bold text-slate-900">
            Explore Real Customer Resolution Stories
          </h3>
          <p className="text-xs text-slate-600">
            See how I handle de-escalations, billing disputes, and onboarding confusion.
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
