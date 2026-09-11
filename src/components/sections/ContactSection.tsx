import React, { useState } from 'react';
import { SectionId } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe2, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  Send,
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [messageSubject, setMessageSubject] = useState('Full-Time Customer Support Role');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${messageSubject} from ${senderName || 'Hiring Team'}`
    )}&body=${encodeURIComponent(
      `Hi Olumide,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${messageBody}\n`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Let's discuss how I can support your customers.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          I am actively interviewing for full-time, remote Customer Support Specialist, Customer Care, and Customer Experience roles.
        </p>
      </div>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Col: Direct Information Cards (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-2">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shrink-0"
                title="Copy email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Guaranteed response within 2 hours during active business hours.
            </p>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Phone & WhatsApp
            </span>
            <div className="flex items-center justify-between gap-2">
              <a 
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shrink-0"
                title="Copy phone"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Available for screening calls, WhatsApp chats, and interview coordination.
            </p>
          </div>

          {/* Availability & Timezone Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Availability & Work Setup
            </span>
            
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Immediate start for full-time remote positions</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Flexible hours covering US (EST/PST) and UK/CET</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Redundant high-speed fiber & battery backups</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Quick Message Form (3 cols) */}
        <div className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-5">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">
              Send a Direct Message
            </h2>
            <p className="text-xs text-slate-500">
              Prefills a direct email to Olumide in your email client.
            </p>
          </div>

          <form onSubmit={handleSend} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sjenkins@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Inquiry Topic</label>
              <select
                value={messageSubject}
                onChange={(e) => setMessageSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Full-Time Customer Support Role">Full-Time Customer Support Opportunity</option>
                <option value="Interview / Screening Call Request">Interview / Screening Call Request</option>
                <option value="Mock Ticket Assessment Request">Mock Ticket Assessment Request</option>
                <option value="General Conversation / Question">General Question</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Your Message</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me a bit about your support team, channels, and what you are looking for..."
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs inline-flex items-center justify-center gap-2 shadow-sm shadow-indigo-500/20 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message to Olumide</span>
            </button>

            {isSent && (
              <p className="text-xs text-emerald-700 text-center font-medium">
                Email composer opened! Looking forward to connecting.
              </p>
            )}
          </form>
        </div>

      </div>

    </div>
  );
};
