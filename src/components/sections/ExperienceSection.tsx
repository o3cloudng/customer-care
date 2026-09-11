import React from 'react';
import { SectionId } from '../../types';
import { EXPERIENCE_ITEMS } from '../../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  FileText
} from 'lucide-react';

interface ExperienceSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Career History & Track Record
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Professional Customer Support Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Demonstrated history of delivering high CSAT ratings, reducing first response times, and retaining high-value accounts in fast-paced support environments.
        </p>
      </div>

      {/* 2. Timeline of Experience Items */}
      <div className="space-y-8">
        {EXPERIENCE_ITEMS.map((item, idx) => (
          <div 
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-5 hover:border-slate-300 transition-all"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  {item.company}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  {item.role}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.summary}
            </p>

            {/* Key Achievements */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Key Contributions & Impact
              </span>
              <ul className="space-y-2">
                {item.achievements.map((achievement, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used Chips */}
            {item.toolsUsed && item.toolsUsed.length > 0 && (
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-400 mr-1 font-medium">Tools:</span>
                {item.toolsUsed.map((tool, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-[11px] font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-slate-100 border border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Looking for a formatted copy for your applicant tracking system?
          </h3>
          <p className="text-xs text-slate-600">
            Download or view the clean, single-page ATS-optimized resume.
          </p>
        </div>
        <button
          onClick={() => onNavigate('resume')}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>View Resume</span>
        </button>
      </div>

    </div>
  );
};
