import React, { useState } from 'react';
import { SIMULATOR_SCENARIOS } from '../data/portfolioData';
import { SimulatorScenario, SimulatorChoice } from '../types';
import { 
  Play, 
  MessageSquare, 
  ShieldAlert, 
  Smile, 
  Frown, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  RotateCcw, 
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Send,
  HelpCircle,
  ThumbsUp,
  HeartHandshake
} from 'lucide-react';

export const InteractiveSupportSimulator: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SIMULATOR_SCENARIOS[0].id);
  const [selectedChoice, setSelectedChoice] = useState<SimulatorChoice | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const currentScenario = SIMULATOR_SCENARIOS.find(s => s.id === activeScenarioId) || SIMULATOR_SCENARIOS[0];

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setSelectedChoice(null);
    setShowExplanation(false);
  };

  const handleSelectChoice = (choice: SimulatorChoice) => {
    setSelectedChoice(choice);
    setShowExplanation(true);
  };

  const handleReset = () => {
    setSelectedChoice(null);
    setShowExplanation(false);
  };

  return (
    <div className="space-y-6" id="support-simulator-section">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive De-escalation Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Test Olumide's Support Approach Live
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl pt-1">
            See how different frontline responses transform customer sentiment. Compare rigid policy enforcement against Olumide's empathetic, revenue-saving resolutions.
          </p>
        </div>

        {/* Quick Scenario Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start md:self-auto">
          {SIMULATOR_SCENARIOS.map((scen, idx) => (
            <button
              key={scen.id}
              onClick={() => handleSelectScenario(scen.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeScenarioId === scen.id
                  ? 'bg-white text-indigo-700 font-semibold shadow-xs border border-slate-200/70'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id={`scenario-tab-${idx}`}
            >
              Scenario {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Card Interface */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Top Chat Bar Simulation */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm text-white shadow-xs">
              {currentScenario.customerAvatar}
            </div>
            <div>
              <div className="text-sm font-semibold flex items-center gap-2">
                <span>{currentScenario.customerName}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-normal">
                  {currentScenario.customerCompany}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Channel: <strong className="text-slate-200">{currentScenario.channel}</strong> &bull; Issue: <span className="text-amber-400 font-medium">{currentScenario.issueType}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs bg-red-950/80 text-red-300 px-2.5 py-1 rounded-full border border-red-800/60 font-medium">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span>Initial Frustration: {currentScenario.initialFrustrationLevel}/10</span>
            </div>
            {selectedChoice && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Incoming Customer Message Preview */}
        <div className="p-6 bg-slate-50/60 border-b border-slate-200/80 space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5 text-red-500" />
            <span>Incoming Customer Message (Live Queue)</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-red-200 shadow-2xs space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {currentScenario.customerAvatar}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{currentScenario.customerName}</span>
                  <span className="text-[10px] text-slate-400">Just now</span>
                </div>
                <p className="text-sm font-medium text-slate-800 italic leading-relaxed">
                  "{currentScenario.customerInitialMessage}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Choice Selector */}
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span>Choose a Frontline Response Strategy</span>
              <span className="text-xs text-slate-500 font-normal lowercase">(click to test customer reaction)</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentScenario.choices.map((choice) => {
              const isSelected = selectedChoice?.id === choice.id;
              const isWinning = choice.type === 'olumide_empathy';

              return (
                <button
                  key={choice.id}
                  onClick={() => handleSelectChoice(choice)}
                  className={`text-left p-4 rounded-xl transition-all border relative flex flex-col justify-between ${
                    isSelected
                      ? isWinning
                        ? 'bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                        : 'bg-red-50/70 border-red-400 ring-2 ring-red-400/20 shadow-md'
                      : isWinning
                      ? 'bg-indigo-50/30 border-indigo-200/80 hover:border-indigo-400 hover:bg-indigo-50/60 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                  id={`choice-btn-${choice.id}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isWinning 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {isWinning ? '★ Recommended: Olumide' : choice.label.split(':')[0]}
                      </span>
                      {isWinning && (
                        <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                          <HeartHandshake className="w-3 h-3" /> Empathetic
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-semibold text-slate-900">
                      {choice.label}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-3 italic leading-relaxed">
                      "{choice.previewText}"
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                    <span className="font-medium text-slate-500">Tone: {choice.toneRating.split(',')[0]}</span>
                    <span className="text-indigo-600 font-semibold inline-flex items-center gap-1">
                      <span>Test Outcome</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Outcome & Sentiment Breakdown */}
          {selectedChoice && (
            <div className={`p-5 rounded-xl border transition-all ${
              selectedChoice.type === 'olumide_empathy'
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-amber-50/80 border-amber-200 text-amber-950'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0 ${
                    selectedChoice.type === 'olumide_empathy' ? 'bg-emerald-600' : 'bg-red-500'
                  }`}>
                    {selectedChoice.type === 'olumide_empathy' ? (
                      <Smile className="w-6 h-6" />
                    ) : (
                      <Frown className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Simulation Result: {selectedChoice.toneRating}
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      Customer Reaction & Sentiment Shift
                    </h4>
                  </div>
                </div>

                {/* Sentiment Delta Badge */}
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 ${
                    selectedChoice.sentimentChange > 0
                      ? 'bg-emerald-600 text-white'
                      : 'bg-red-600 text-white'
                  }`}>
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Sentiment Score: {selectedChoice.sentimentChange > 0 ? `+${selectedChoice.sentimentChange}% Turnaround` : `${selectedChoice.sentimentChange}% Drop`}</span>
                  </span>
                </div>
              </div>

              {/* Reaction Description */}
              <div className="pt-3 space-y-2 text-sm">
                <p className="font-semibold text-slate-900">
                  {selectedChoice.customerReaction}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Why this happened:</strong> {selectedChoice.outcomeExplanation}
                </p>
              </div>

              {/* If it's the winning response, show Olumide's exact resolution metrics */}
              {selectedChoice.type === 'olumide_empathy' && (
                <div className="mt-4 pt-4 border-t border-emerald-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/80 p-3 rounded-lg border border-emerald-200/60">
                    <div className="text-[11px] font-medium text-emerald-800 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>Resolution Time</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {currentScenario.resolutionTime}
                    </div>
                  </div>

                  <div className="bg-white/80 p-3 rounded-lg border border-emerald-200/60">
                    <div className="text-[11px] font-medium text-emerald-800 flex items-center gap-1">
                      <Award className="w-3 h-3 text-emerald-600" />
                      <span>Verified CSAT Rating</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {currentScenario.csatResult}
                    </div>
                  </div>

                  <div className="bg-white/80 p-3 rounded-lg border border-emerald-200/60">
                    <div className="text-[11px] font-medium text-emerald-800 flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-emerald-600" />
                      <span>Business & Retention Value</span>
                    </div>
                    <div className="text-sm font-bold text-emerald-700 mt-0.5">
                      {currentScenario.revenueRetained}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Olumide's Full Script & Action Breakdown */}
          <div className="bg-slate-900 text-white p-5 rounded-xl space-y-4 border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold">
                  OO
                </div>
                <span className="text-xs font-bold text-white">Olumide's Actual Customer Message</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-900/80 text-indigo-300 border border-indigo-700/50">
                  Live Response
                </span>
              </div>
              <span className="text-[11px] text-slate-400">⚡ 45s Response Speed</span>
            </div>

            <p className="text-sm text-slate-200 italic leading-relaxed bg-slate-950/60 p-4 rounded-lg border border-slate-800">
              "{currentScenario.olumideMasterResponse}"
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Behind-the-Scenes Resolution Steps:
              </span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {currentScenario.olumideActionSummary.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
