import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { AboutSection } from '../components/sections/AboutSection';
import { SectionId } from '../types';

export const AboutPage: React.FC = () => {
  usePageTitle(
    'About & Customer Care Philosophy',
    'Learn about Olumide Oderinde: customer care philosophy, human-first empathy, omnichannel support mastery, and high-reliability remote work setup.'
  );

  const navigate = useNavigate();

  const handleNavigate = (sectionId: SectionId) => {
    if (sectionId === 'home') {
      navigate('/');
    } else {
      navigate(`/${sectionId}`);
    }
  };

  return (
    <div className="w-full">
      <AboutSection onNavigate={handleNavigate} />
    </div>
  );
};
