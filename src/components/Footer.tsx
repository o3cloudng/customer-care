import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  HeartHandshake, 
  Phone, 
  Mail, 
  MapPin, 
  Globe2, 
  ArrowUpRight, 
  CheckCircle2,
  Sparkles,
  MessageCircle
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Identity & Scope */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-semibold text-white tracking-tight block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-indigo-400 font-medium">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
              Empathetic, human-first customer support specialist. Dedicated to turning customer frustration into long-term brand loyalty through active listening, rapid first-contact resolution, and clear de-escalation across live chat, email, and ticketing.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for International Remote Roles (Immediate Start)</span>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-y-2 gap-x-4">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                Global Timezone Coverage (UTC / CET / US Hours)
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">
                  Overview & Snapshot
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-indigo-400 transition-colors">
                  Support Scenarios & De-escalation
                </Link>
              </li>
              <li>
                <Link to="/how-i-work" className="hover:text-indigo-400 transition-colors">
                  How I Work (5-Step Framework)
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-indigo-400 transition-colors">
                  Skills & Helpdesk Tools
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-indigo-400 transition-colors">
                  Verified Experience & Impact
                </Link>
              </li>
              <li>
                <Link to="/cover-letter" className="hover:text-indigo-400 transition-colors">
                  Cover Letter & Executive Pitch
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Direct Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block font-medium">Email Address</span>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-white hover:text-indigo-300 text-xs flex items-center gap-1.5 transition-colors mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="break-all">{PERSONAL_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block font-medium">Phone & WhatsApp</span>
                <a 
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                  className="text-white hover:text-indigo-300 text-xs flex items-center gap-1.5 transition-colors mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg border border-slate-700 transition-all font-medium"
                >
                  <span>View Printable Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              97.8% Average CSAT
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              &lt; 1.8 min Chat FRT
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              94.2% First Contact Resolution
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
