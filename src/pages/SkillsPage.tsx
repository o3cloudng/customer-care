import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { TechnicalSkillsSection } from '../components/sections/TechnicalSkillsSection';
import { SectionId } from '../types';

export const SkillsPage: React.FC = () => {
  usePageTitle(
    'Customer Support Skills & Helpdesk Tools',
    'Customer care competencies: Conflict de-escalation, empathetic communication, Zendesk, Intercom, Freshdesk, Loom, Slack, and Knowledge Base authoring.'
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
      <TechnicalSkillsSection onNavigate={handleNavigate} />
    </div>
  );
};
