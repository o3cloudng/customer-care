import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { TestimonialItem } from '../types';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  HeartHandshake, 
  Building2, 
  Award,
  Sparkles,
  Users,
  ArrowRight
} from 'lucide-react';

export const WallOfPraise: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'customer' | 'lead'>('all');

  const filteredTestimonials = TESTIMONIALS.filter(t => {
    if (filter === 'lead') return t.id === 'test-4';
    if (filter === 'customer') return t.id !== 'test-4';
    return true;
  });

  return (
    <div className="space-y-6" id="wall-of-praise-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Customer Feedback & Team Endorsements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Wall of Love & Verified Satisfaction
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl pt-1">
            Real customer feedback, retention praise, and supervisor endorsements from over 4,500 frontline support interactions.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start md:self-auto text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-white text-indigo-700 font-bold shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Feedback ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setFilter('customer')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filter === 'customer'
                ? 'bg-white text-indigo-700 font-bold shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Customer Reviews
          </button>
          <button
            onClick={() => setFilter('lead')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filter === 'lead'
                ? 'bg-white text-indigo-700 font-bold shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Team Lead Endorsement
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTestimonials.map((t) => {
          const isSupervisor = t.id === 'test-4';

          return (
            <div
              key={t.id}
              className={`p-6 rounded-2xl flex flex-col justify-between border transition-all ${
                isSupervisor
                  ? 'bg-gradient-to-br from-indigo-50/80 via-white to-indigo-50/40 border-indigo-200 shadow-sm md:col-span-2 lg:col-span-1'
                  : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div className="space-y-4">
                
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    isSupervisor 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-200/70'
                  }`}>
                    {t.highlightTag}
                  </span>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>

              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                  isSupervisor 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}>
                  {t.avatarInitials}
                </div>

                <div className="text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.author}</span>
                  </div>
                  <p className="text-slate-500 font-medium">
                    {t.role}, <strong className="text-slate-700">{t.company}</strong>
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Trust & Satisfaction Banner */}
      <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-700 font-medium">
          <HeartHandshake className="w-4 h-4 text-indigo-600" />
          <span>Verified frontline data: 4,500+ tickets &bull; 97.8% Lifetime CSAT &bull; 99.4% SLA Compliance</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>References & contact verification available upon request</span>
        </div>
      </div>
    </div>
  );
};
