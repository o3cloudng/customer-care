import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { ResumeSection } from '../components/sections/ResumeSection';
import { SectionId } from '../types';

export const ResumePage: React.FC = () => {
  usePageTitle(
    'Resume & Curriculum Vitae',
    'ATS-optimized resume of Olumide Oderinde, Customer Support & Experience Specialist: experience, verified metrics (97.8% CSAT), education, and skills.'
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
      <ResumeSection onNavigate={handleNavigate} />
    </div>
  );
};
