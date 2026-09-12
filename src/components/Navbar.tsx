import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  HeartHandshake, 
  Menu, 
  X, 
  FileText, 
  Mail, 
  ChevronRight,
  ChevronDown,
  User,
  Workflow,
  Send,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SubNavItem {
  path: string;
  label: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change or mobile menu close
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 150);
  };

  const aboutSubNavItems: SubNavItem[] = [
    {
      path: '/about',
      label: 'About Olumide',
      shortDesc: 'Background, values & analytical customer mindset',
      icon: User,
    },
    {
      path: '/how-i-work',
      label: 'Methodology',
      shortDesc: '5-step diagnostic & incident resolution framework',
      icon: Workflow,
    },
    {
      path: '/resume',
      label: 'Resume / CV',
      shortDesc: 'Experience, tech stack, certifications & ATS copy',
      icon: FileText,
      badge: 'ATS Ready',
    },
    {
      path: '/cover-letter',
      label: 'Cover Letter',
      shortDesc: 'Tailored value proposition & remote work pitch',
      icon: Send,
    },
  ];

  const primaryNavItems = [
    { path: '/', label: 'Overview' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills & Stack' },
    { path: '/case-studies', label: 'Support Scenarios' },
  ];

  const isAboutSectionActive = [
    '/about',
    '/how-i-work',
    '/resume',
    '/cover-letter'
  ].includes(location.pathname);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm shadow-slate-900/5' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Candidate Header */}
          <Link 
            to="/"
            className="flex items-center gap-3 group text-left focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg p-1 -ml-1"
            id="nav-logo-btn"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm shrink-0">
              <HeartHandshake className="w-5 h-5 transition-transform group-hover:scale-105" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open to Remote
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight hidden sm:block">
                Customer Success & Technical Support Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Streamlined Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1">
            
            {/* 1. Overview */}
            <NavLink
              to="/"
              end
              className={({ isActive }) => 
                `px-3.5 py-2 rounded-lg text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/70 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`
              }
            >
              Overview
            </NavLink>

            {/* 2. About Dropdown (Houses About, Methodology, Resume, Cover Letter) */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                id="nav-about-dropdown-btn"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                aria-expanded={isAboutDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none cursor-pointer ${
                  isAboutSectionActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/70 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>About</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isAboutDropdownOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'
                  }`} 
                />
              </button>

              {/* Dropdown Menu Panel */}
              {isAboutDropdownOpen && (
                <div 
                  className="absolute left-0 top-full pt-1.5 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="nav-about-dropdown-btn"
                >
                  <div className="bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-200/90 p-2 overflow-hidden">
                    <div className="px-3 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1 flex items-center justify-between">
                      <span>Candidate Dossier</span>
                      <span className="text-[10px] font-medium text-indigo-600">Quick Review</span>
                    </div>

                    <div className="space-y-1">
                      {aboutSubNavItems.map((sub) => {
                        const Icon = sub.icon;
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            role="menuitem"
                            onClick={() => setIsAboutDropdownOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors group text-left ${
                              isSubActive 
                                ? 'bg-indigo-50 text-indigo-900 font-medium' 
                                : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                              isSubActive 
                                ? 'bg-indigo-600 text-white shadow-xs' 
                                : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                  {sub.label}
                                </span>
                                {sub.badge && (
                                  <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug line-clamp-1 group-hover:text-slate-600">
                                {sub.shortDesc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Recruiter fast-track footer in dropdown */}
                    <div className="mt-1 pt-2 border-t border-slate-100 px-3 py-1.5 bg-slate-50/70 rounded-lg flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        US / UK / EU Timezone Friendly
                      </span>
                      <Link 
                        to="/resume" 
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-0.5"
                      >
                        <span>PDF</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 3. Primary Sections */}
            {primaryNavItems.slice(1).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `px-3.5 py-2 rounded-lg text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/70 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </nav>

          {/* Right Action / Contact Button for Recruiters */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-500/20 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none cursor-pointer"
              id="nav-quick-contact-btn"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="sm:hidden px-3 py-1.5 min-h-[38px] text-xs font-semibold text-white bg-indigo-600 rounded-lg focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none flex items-center justify-center shadow-xs"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-drawer-menu"
              id="mobile-nav-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          role="region"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto"
        >
          {/* Main Sections */}
          <div className="space-y-1">
            <p className="px-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Primary Navigation
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {primaryNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2 min-h-[40px] rounded-lg text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/80'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </NavLink>
              ))}
            </div>
          </div>

          {/* About & Credentials Group */}
          <div className="space-y-1 pt-1 border-t border-slate-100">
            <p className="px-2 text-[10px] font-bold text-indigo-600 uppercase tracking-wider flex items-center justify-between">
              <span>About & Credentials</span>
              <span className="text-[9px] font-normal text-slate-400">Recruiter Dossier</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {aboutSubNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-lg text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/80'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge ? (
                      <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                        {item.badge}
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="pt-2 border-t border-slate-200 flex gap-2">
            <Link
              to="/resume"
              className="flex-1 min-h-[44px] py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Full Resume</span>
            </Link>
            <Link
              to="/contact"
              className="flex-1 min-h-[44px] py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

