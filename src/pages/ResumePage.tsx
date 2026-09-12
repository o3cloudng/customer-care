import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { ResumeSection } from '../components/sections/ResumeSection';
import { SectionId } from '../types';

export const ResumePage: React.FC = () => {
  usePageTitle(
    'Resume & Curriculum Vitae',
    'ATS-optimized resume of Olumide Oderinde, Customer Success & Technical Support Specialist: Tier 2/3 incident management, SLA compliance, API & database troubleshooting, education, and certifications.'
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
