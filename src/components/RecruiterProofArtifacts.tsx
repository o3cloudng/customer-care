import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  ThumbsUp, 
  ThumbsDown, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Code2,
  AlertCircle,
  Copy,
  Check,
  Zap,
  BookOpen,
  MessageSquare,
  Bug
} from 'lucide-react';

export const RecruiterProofArtifacts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kb' | 'macro' | 'bug'>('kb');
  const [helpfulFeedback, setHelpfulFeedback] = useState<'yes' | 'no' | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6" id="recruiter-proof-artifacts-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Tangible Work Samples & Artifacts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Proof of Work: Real Frontline Artifacts
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl pt-1">
            See the actual quality of Olumide's work: self-serve Help Center articles, calibrated tone macros, and pristine bug escalations to engineering teams.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('kb')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all inline-flex items-center gap-1.5 ${
              activeTab === 'kb'
                ? 'bg-white text-indigo-700 font-bold shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            id="tab-kb-article"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Help Center Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('macro')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all inline-flex items-center gap-1.5 ${
              activeTab === 'macro'
                ? 'bg-white text-indigo-700 font-bold shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            id="tab-macro-calibration"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Macro Calibration</span>
          </button>

          <button
            onClick={() => setActiveTab('bug')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all inline-flex items-center gap-1.5 ${
              activeTab === 'bug'
                ? 'bg-white text-indigo-700 font-bold shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            id="tab-bug-escalation"
          >
            <Bug className="w-3.5 h-3.5" />
            <span>Engineering Ticket</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* TAB 1: HELP CENTER GUIDE */}
        {activeTab === 'kb' && (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Guide Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/60">
                  Help Center Article #1042
                </span>
                <span className="text-slate-500">Category: Workspace & Team Permissions</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 font-medium">
                <span>Reading Time: 2 mins</span>
                <span>&bull;</span>
                <span className="text-emerald-600 font-semibold">Deflection Rate: 89% (1,200+ reads)</span>
              </div>
            </div>

            {/* Article Content Preview */}
            <div className="space-y-4 max-w-3xl">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                How to Invite Team Members and Configure Calendar Visibility
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                When adding medical or operational staff to your workspace, assigning the right access role ensures everyone can see appointment slots without risking accidental edits to administrative billing settings.
              </p>

              {/* Pro Tip Callout Box */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Important Note for Clinic Administrators:</strong> To allow staff members to view appointment slots on the master schedule, select <strong>"Clinic Staff"</strong> rather than "External Guest." External Guests cannot view master booking calendars by default.
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Step-by-Step Setup Guide
                </h4>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </span>
                    <div className="text-xs space-y-1">
                      <strong className="text-slate-900 font-semibold">Navigate to Settings &rarr; Team Directory:</strong>
                      <p className="text-slate-600">Click the gear icon in your top-right header and select <em>"Team & Permissions"</em> from the sidebar menu.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </span>
                    <div className="text-xs space-y-1">
                      <strong className="text-slate-900 font-semibold">Enter Staff Email and Assign Role:</strong>
                      <p className="text-slate-600">Click <em>"Invite New Member"</em>. Enter their corporate email address and set their role dropdown to <strong>"Staff Viewer"</strong> or <strong>"Practitioner"</strong>.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </span>
                    <div className="text-xs space-y-1">
                      <strong className="text-slate-900 font-semibold">Send Invite & Verify Master Schedule:</strong>
                      <p className="text-slate-600">Click <em>"Send Invitation"</em>. The team member will receive a one-click login link. Their calendar view will automatically sync to your clinic schedule within 30 seconds.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Was this article helpful? Widget */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-slate-800">Was this article helpful to you?</span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHelpfulFeedback('yes')}
                    className={`px-3 py-1.5 rounded-lg border inline-flex items-center gap-1.5 transition-all ${
                      helpfulFeedback === 'yes'
                        ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Yes (89%)</span>
                  </button>

                  <button
                    onClick={() => setHelpfulFeedback('no')}
                    className={`px-3 py-1.5 rounded-lg border inline-flex items-center gap-1.5 transition-all ${
                      helpfulFeedback === 'no'
                        ? 'bg-red-600 text-white border-red-600 font-bold'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <ThumbsDown className="w-3.5 h-3.5" />
                    <span>No</span>
                  </button>

                  {helpfulFeedback && (
                    <span className="text-emerald-700 font-medium ml-2">
                      Thanks for your feedback!
                    </span>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: MACRO CALIBRATION BEFORE / AFTER */}
        {activeTab === 'macro' && (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="space-y-1 border-b border-slate-200/80 pb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200/60">
                Tone & Retention Calibration
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Before & After: Transforming Cold Robot Macros into Retention Wins
              </h3>
              <p className="text-xs text-slate-600">
                Comparing standard corporate canned responses against Olumide's human-centered de-escalation response on renewal disputes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* The Robotic Response */}
              <div className="p-5 rounded-xl bg-red-50/50 border border-red-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-red-100 text-red-800 font-bold text-xs">
                    ❌ The Standard Bureaucratic Macro
                  </span>
                  <span className="text-[11px] text-red-600 font-medium">CSAT: 1/5 (Causes Chargeback)</span>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200/80 text-xs text-slate-700 space-y-2 italic leading-relaxed">
                  <p>
                    "Dear Customer, Thank you for contacting customer support regarding your recent invoice."
                  </p>
                  <p>
                    "Please be advised that pursuant to Section 4.2 of our Terms of Service, all annual plans renew automatically upon expiration. Accounts that are not cancelled prior to the renewal date are non-refundable."
                  </p>
                  <p>
                    "If you would like to disable renewal for the following calendar year, please click here. We appreciate your business."
                  </p>
                </div>

                <div className="text-xs text-red-900 bg-red-100/70 p-3 rounded-lg space-y-1">
                  <strong>Why it fails:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-red-800">
                    <li>Zero empathy or acknowledgment of customer's surprise</li>
                    <li>Quotes legal terms of service defensively</li>
                    <li>Gives customer no alternative other than filing a credit card chargeback</li>
                  </ul>
                </div>
              </div>

              {/* Olumide's Calibrated Macro */}
              <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs">
                    ✓ Olumide's Calibrated Human Response
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold">CSAT: 5/5 (Retains Account)</span>
                </div>

                <div className="bg-white p-4 rounded-lg border border-emerald-200/80 text-xs text-slate-700 space-y-2 italic leading-relaxed">
                  <p>
                    "Hi Sarah, thank you for reaching out, and I completely understand why seeing an unexpected $588 charge would be alarming, especially when your team hasn't been actively logging in."
                  </p>
                  <p>
                    "Take a deep breath—I am looking into your account in Stripe right now and I will take personal ownership of getting this resolved for you today. You won't have to fight this with your bank."
                  </p>
                  <p>
                    "I verified that your team was inactive for the past 45 days. I have processed a full refund for the renewal charge. In addition, I have archived your workspace on our free tier so you never lose your historical assets."
                  </p>
                </div>

                <div className="text-xs text-emerald-900 bg-emerald-100/70 p-3 rounded-lg space-y-1">
                  <strong>Why it wins:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-emerald-800">
                    <li>Immediate emotional validation diffuses customer adrenaline</li>
                    <li>Takes personal ownership ("I will handle this, no bank dispute needed")</li>
                    <li>Retains goodwill and preserves customer lifetime value</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 3: ENGINEERING BUG TICKET */}
        {activeTab === 'bug' && (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-200/60 flex items-center gap-1.5">
                  <Bug className="w-3.5 h-3.5 text-purple-600" />
                  Linear / Jira Ticket #ENG-3829
                </span>
                <span className="text-slate-500 font-medium">Reporter: Olumide Oderinde (Support Lead)</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold">
                Priority: P1 - High Business Impact
              </span>
            </div>

            <div className="space-y-4 max-w-3xl">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  [BUG] Safari 17.2: Custom Attribution Export CSV Truncating Columns 4-9
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Affecting: Web App Reporting Module &bull; Customer Sentiment: High Frustration (Month-End Reporting)
                </p>
              </div>

              {/* Bug Ticket Breakdown Table */}
              <div className="space-y-3 text-xs">
                
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-semibold">1. Summary & Customer Impact:</strong>
                  <p className="text-slate-700 leading-relaxed">
                    When customers on Safari 17+ attempt to export their Custom Attribution Report via the analytics dashboard, the generated CSV file truncates columns 4 through 9 (Customer Acquisition Channels and Campaign IDs). 4 enterprise customers reached out this morning under executive deadline pressure.
                  </p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-semibold">2. Steps to Reproduce (100% Repro Rate):</strong>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700">
                    <li>Log in to any SMB/Enterprise account using Safari 17.2 on macOS Sonoma.</li>
                    <li>Navigate to <code>Analytics &rarr; Multi-Touch Attribution</code>.</li>
                    <li>Set date range to 'Last 30 Days' and click <em>Export CSV</em>.</li>
                    <li>Open exported CSV in Excel or Numbers: note columns D to I are missing header values and row data.</li>
                  </ol>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-semibold">3. Root Cause Investigation & Console Log:</strong>
                  <div className="bg-slate-900 text-slate-200 p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                    <code>TypeError: Cannot read properties of undefined (reading 'attribution_source_v2') at SafariBlobWorker.js:48</code>
                  </div>
                </div>

                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 space-y-1 text-emerald-950">
                  <strong className="text-emerald-900 font-semibold">4. Proactive Workaround Provided to Customers:</strong>
                  <p className="text-emerald-800 leading-relaxed">
                    Created temporary saved server-side export views for all 4 affected accounts and sent them completed CSVs via secure email within 15 minutes, preventing business blockage while engineering deploys a patch.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
