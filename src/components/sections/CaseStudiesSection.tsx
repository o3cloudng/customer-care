import React, { useState } from 'react';
import { SectionId, SupportScenario } from '../../types';
import { SUPPORT_SCENARIOS } from '../../data/portfolioData';
import { 
  HeartHandshake, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Smile, 
  AlertCircle, 
  ArrowRight, 
  Search, 
  Star, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Tag,
  Sparkles
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>(SUPPORT_SCENARIOS[0].id);

  const categories = [
    { id: 'all', label: 'All Scenarios (5)' },
    { id: 'Billing & Subscriptions', label: 'Billing & Refunds' },
    { id: 'Onboarding & Adoption', label: 'Onboarding & Setup' },
    { id: 'Account Security & Access', label: 'Urgent Account Access' },
    { id: 'Workflow & Feature Guidance', label: 'Feature Guidance' },
    { id: 'Crisis Communication & De-escalation', label: 'Crisis & Outages' },
  ];

  const filteredScenarios = selectedCategory === 'all'
    ? SUPPORT_SCENARIOS
    : SUPPORT_SCENARIOS.filter(s => s.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Support Scenarios & De-escalation Studies
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          How I turn tricky customer moments into 5-star experiences.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Real-world examples showcasing active listening, conflict de-escalation, rapid resolution, and customer retention across live chat and email.
        </p>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Scenario Cards List */}
      <div className="space-y-6">
        {filteredScenarios.map((scenario) => {
          const isExpanded = expandedId === scenario.id;

          return (
            <div
              key={scenario.id}
              className={`rounded-2xl bg-white border transition-all duration-200 overflow-hidden ${
                isExpanded 
                  ? 'border-indigo-300 shadow-md shadow-indigo-500/5 ring-1 ring-indigo-200/50' 
                  : 'border-slate-200/80 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Card Summary Header (Clickable) */}
              <div 
                onClick={() => toggleExpand(scenario.id)}
                className="p-6 cursor-pointer select-none space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {scenario.category}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      scenario.priority === 'Urgent' 
                        ? 'bg-rose-50 text-rose-700 border border-rose-100'
                        : scenario.priority === 'High Priority'
                        ? 'bg-amber-50 text-amber-700 border border-amber-100'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {scenario.priority}
                    </span>
                    <span className="text-xs text-slate-500">
                      {scenario.channel} • {scenario.customerType}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                      <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      5.0 CSAT
                    </span>
                    <button 
                      aria-label="Toggle details"
                      className="text-slate-400 hover:text-slate-600"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {scenario.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {scenario.summary}
                  </p>
                </div>

                {/* Brief preview quote */}
                {!isExpanded && (
                  <div className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                    Incoming Customer Concern: "{scenario.incomingMessage.slice(0, 110)}..."
                  </div>
                )}
              </div>

              {/* Expanded In-Depth Details */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-6">
                  
                  {/* Step 1 & 2: Customer Message & Empathetic Response */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Incoming Message */}
                    <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Customer's Frustration & Message
                      </span>
                      <p className="text-xs text-slate-700 italic leading-relaxed">
                        "{scenario.incomingMessage}"
                      </p>
                      <p className="text-[11px] text-slate-500 pt-1 border-t border-rose-100/60">
                        <strong>Root Emotion:</strong> {scenario.customerFrustration}
                      </p>
                    </div>

                    {/* Empathetic Response */}
                    <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                        <HeartHandshake className="w-3.5 h-3.5" />
                        My Empathetic Validation
                      </span>
                      <p className="text-xs text-slate-800 leading-relaxed font-normal">
                        "{scenario.empathyResponse}"
                      </p>
                      <p className="text-[11px] text-indigo-600/90 pt-1 border-t border-indigo-100/60">
                        <strong>Strategy:</strong> Immediate empathy before explanation; taking full personal ownership.
                      </p>
                    </div>

                  </div>

                  {/* Step 3: Action Taken */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Step-by-Step Resolution Process
                    </h3>
                    <ul className="space-y-2">
                      {scenario.investigationAndAction.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step 4: Outcome & Impact */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                          Final Customer Outcome
                        </span>
                        <p className="text-xs text-slate-800 mt-1 leading-relaxed">
                          {scenario.resolutionOutcome}
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                          Business & Retention Impact
                        </span>
                        <p className="text-xs text-slate-800 mt-1 leading-relaxed">
                          {scenario.retentionImpact}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs text-indigo-700 font-medium">
                      <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
                      <span><strong>Key Takeaway:</strong> {scenario.keyTakeaway}</span>
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Note */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900">
            Want to see how I handle your specific customer scenarios?
          </h3>
          <p className="text-xs text-slate-600">
            I am happy to complete a mock ticket exercise or tone assessment as part of the interview process.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs whitespace-nowrap shadow-xs transition-colors"
        >
          Schedule a Conversation
        </button>
      </div>

    </div>
  );
};
