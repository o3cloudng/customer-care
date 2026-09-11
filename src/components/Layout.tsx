import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';

export const Layout: React.FC = () => {
  const location = useLocation();

  // Breadcrumb mapping
  const routeNames: Record<string, string> = {
    '/': 'Overview',
    '/about': 'About & Support Philosophy',
    '/case-studies': 'Support Scenarios & De-escalation',
    '/how-i-work': 'Support Methodology (5-Step Framework)',
    '/skills': 'Skills & Helpdesk Tools',
    '/experience': 'Work Experience & Track Record',
    '/resume': 'Resume / Curriculum Vitae',
    '/cover-letter': 'Cover Letter / Executive Pitch',
    '/contact': 'Contact & Availability',
  };

  const currentRouteName = routeNames[location.pathname] || 'Page';
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col antialiased selection:bg-indigo-500/15 selection:text-indigo-950">
      <ScrollToTop />
      
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        
        {/* Subtle Route Breadcrumb for Sub-Pages */}
        {!isHomePage && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link 
              to="/" 
              className="inline-flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-indigo-600 font-semibold">{currentRouteName}</span>
          </nav>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
