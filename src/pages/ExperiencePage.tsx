import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SectionId } from '../types';

export const ExperiencePage: React.FC = () => {
  usePageTitle(
    'Professional Experience & Frontline Track Record',
    'Verified career track record: Senior Customer Support Specialist, Customer Care & Onboarding Representative, and Client Support Associate.'
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
      <ExperienceSection onNavigate={handleNavigate} />
    </div>
  );
};
