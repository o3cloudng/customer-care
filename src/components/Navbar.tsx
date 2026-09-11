import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  HeartHandshake, 
  Menu, 
  X, 
  FileText, 
  Mail, 
  ChevronRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Overview' },
    { path: '/about', label: 'About' },
    { path: '/case-studies', label: 'Support Scenarios' },
    { path: '/how-i-work', label: 'Methodology' },
    { path: '/skills', label: 'Skills & Tools' },
    { path: '/experience', label: 'Experience' },
    { path: '/resume', label: 'Resume' },
    { path: '/cover-letter', label: 'Cover Letter' },
    { path: '/contact', label: 'Contact' },
  ];

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
          
          {/* Logo / Positioning */}
          <Link 
            to="/"
            className="flex items-center gap-3 group text-left focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg p-1 -ml-1"
            id="nav-logo-btn"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
              <HeartHandshake className="w-5 h-5 transition-transform group-hover:scale-105" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                  Customer Support
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight hidden sm:block">
                Customer Experience & Care Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
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

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/80 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              id="nav-quick-resume-btn"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Resume</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-500/20 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
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
              className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
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
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl"
        >
          <div className="grid grid-cols-2 gap-1.5 py-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-lg text-xs font-medium text-left transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
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

          <div className="pt-3 border-t border-slate-200 flex gap-2">
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
              <span>Contact Olumide</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
