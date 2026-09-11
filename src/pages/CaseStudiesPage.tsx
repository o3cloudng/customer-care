import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { SectionId } from '../types';

export const CaseStudiesPage: React.FC = () => {
  usePageTitle(
    'Support Scenarios & De-escalation Studies',
    'Real-world customer support scenarios: resolving billing disputes, non-tech onboarding confusion, 2FA lockouts, feature guidance, and outage crisis communication.'
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
      <CaseStudiesSection onNavigate={handleNavigate} />
    </div>
  );
};
