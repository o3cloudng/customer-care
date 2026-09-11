import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { HowIWorkSection } from '../components/sections/HowIWorkSection';
import { SectionId } from '../types';

export const HowIWorkPage: React.FC = () => {
  usePageTitle(
    'Support Methodology & 5-Step Resolution Framework',
    'How Olumide resolves customer tickets: Listen & Validate, Clarify Root Needs, Deliver Jargon-Free Guidance, Confirm Satisfaction, and Document in Help Center.'
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
      <HowIWorkSection onNavigate={handleNavigate} />
    </div>
  );
};
