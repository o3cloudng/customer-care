import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { HowIWorkPage } from './pages/HowIWorkPage';
import { SkillsPage } from './pages/SkillsPage';
import { CustomerSuccessPage } from './pages/CustomerSuccessPage';
import { IncidentManagementPage } from './pages/IncidentManagementPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ResumePage } from './pages/ResumePage';
import { CoverLetterPage } from './pages/CoverLetterPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Backwards compatibility helper for old hash URLs (e.g. /#case-studies -> /case-studies)
const HashRedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const cleanHash = window.location.hash.replace(/^#\/?/, '');
      const validRoutes = [
        'about',
        'case-studies',
        'how-i-work',
        'skills',
        'cs-strategy',
        'incident-management',
        'experience',
        'resume',
        'cover-letter',
        'contact',
      ];
      if (validRoutes.includes(cleanHash)) {
        navigate(`/${cleanHash}`, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <HashRedirectHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Multiple Page Routes */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="how-i-work" element={<HowIWorkPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="cs-strategy" element={<CustomerSuccessPage />} />
          <Route path="incident-management" element={<IncidentManagementPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="cover-letter" element={<CoverLetterPage />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* 404 Catch-All Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
