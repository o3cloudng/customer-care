import React from 'react';
import { SectionId } from '../../types';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Sparkles,
  Users,
  Bell
} from 'lucide-react';

interface IncidentManagementSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const IncidentManagementSection: React.FC<IncidentManagementSectionProps> = ({ onNavigate }) => {
  const triageLevels = [
    {
      level: "P1 — Urgent / Critical",
      color: "border-rose-200 bg-rose-50/40 text-rose-700",
      badgeColor: "bg-rose-100 text-rose-800",
      examples: "Complete account lockout right before key meeting, accidental large billing charge, service outage affecting live users.",
      targetResponse: "< 2 Minutes (Live Chat)",
      protocol: "Immediate empathetic acknowledgement, pause automated bot sequences, take full ownership, provide real-time updates every 10 minutes."
    },
    {
      level: "P2 — High Priority",
      color: "border-amber-200 bg-amber-50/40 text-amber-700",
      badgeColor: "bg-amber-100 text-amber-800",
      examples: "Team member invitation errors, report export failure on deadline, VIP account inquiries.",
      targetResponse: "< 15 Minutes",
      protocol: "Validate user timeline, test reproducing the issue immediately, provide workaround or coordinate expedited internal fix."
    },
    {
      level: "P3 — Standard Inquiries",
      color: "border-slate-200 bg-white text-slate-700",
      badgeColor: "bg-slate-100 text-slate-800",
      examples: "How-to questions, subscription plan comparison, receipt copies, feature suggestions.",
      targetResponse: "< 45 Minutes",
      protocol: "Provide clear, bite-sized numbered instructions, annotated screenshots or Loom video, confirm user satisfaction."
    }
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Triage & Crisis Protocols
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Queue Triage & Service Disruption Protocols
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          How I manage high-volume queues, prioritize critical customer emergencies, and maintain transparent, reassuring communication during outages.
        </p>
      </div>

      {/* 2. Priority Triage Matrix */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Ticket Prioritization Matrix
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {triageLevels.map((triage, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border ${triage.color} space-y-3 shadow-xs`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${triage.badgeColor} self-start`}>
                  {triage.level}
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  Target Response Time: {triage.targetResponse}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 pt-1">
                <div>
                  <strong className="block text-slate-900 mb-1">Common Scenarios:</strong>
                  {triage.examples}
                </div>
                <div>
                  <strong className="block text-slate-900 mb-1">Support Action Protocol:</strong>
                  {triage.protocol}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Outage Communication Framework */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Outage Management
          </span>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            How I communicate during unplanned platform downtime
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <span className="font-bold text-slate-900 text-sm block">1. Swift Acknowledgement</span>
            <p>
              Deploy an immediate banner in the help center and chat widget within 5 minutes so users know we are aware and actively resolving it.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-900 text-sm block">2. Regular 10-Min Updates</span>
            <p>
              Silence fuels panic. Even if there is no new update, I post regular notes confirming our team is on it and their data is 100% safe.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-900 text-sm block">3. Individual Confirmations</span>
            <p>
              Once service is restored, I send personalized follow-up confirmations to every waiting customer to confirm their account is working smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-slate-100 border border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Read the platform outage de-escalation case study
          </h3>
          <p className="text-xs text-slate-600">
            See how I managed 65+ concurrent customer chats during a 45-minute outage with zero customer churn.
          </p>
        </div>
        <button
          onClick={() => onNavigate('case-studies')}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs inline-flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <span>View Outage Scenario</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
