import React from 'react';
import { SectionId } from '../../types';
import { SUPPORT_SKILL_GROUPS } from '../../data/portfolioData';
import { 
  HeartHandshake, 
  Headphones, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  Video,
  FileText
} from 'lucide-react';

interface TechnicalSkillsSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const TechnicalSkillsSection: React.FC<TechnicalSkillsSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Skills & Tooling Stack
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Tools, platforms, and customer care capabilities.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          From high-touch de-escalation and active listening to daily mastery of Zendesk, Intercom, and team collaboration workflows.
        </p>
      </div>

      {/* 2. Skill Groups Grid */}
      <div className="space-y-8">
        {SUPPORT_SKILL_GROUPS.map((group, groupIdx) => (
          <div 
            key={groupIdx}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6"
          >
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {group.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                {group.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 space-y-1.5 hover:border-indigo-200 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {skill.proficiency}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Daily Workflow Stack */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-5">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Everyday Productivity Stack
          </span>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            How I organize my day for maximum responsiveness
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center space-y-1">
            <span className="text-xs font-bold text-slate-800 block">Zendesk / Intercom</span>
            <span className="text-[11px] text-slate-500">Queue Triage & Chat</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center space-y-1">
            <span className="text-xs font-bold text-slate-800 block">Loom</span>
            <span className="text-[11px] text-slate-500">Video Walkthroughs</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center space-y-1">
            <span className="text-xs font-bold text-slate-800 block">Notion & Docs</span>
            <span className="text-[11px] text-slate-500">Macros & Knowledge Base</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center space-y-1">
            <span className="text-xs font-bold text-slate-800 block">Slack</span>
            <span className="text-[11px] text-slate-500">Internal Team Handoffs</span>
          </div>
        </div>
      </section>

      {/* 4. Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-slate-100 border border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            View my work experience and career history
          </h3>
          <p className="text-xs text-slate-600">
            Frontline customer care roles, ticket volume handled, and team achievements.
          </p>
        </div>
        <button
          onClick={() => onNavigate('experience')}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <span>View Experience</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
