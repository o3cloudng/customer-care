import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { IncidentManagementSection } from '../components/sections/IncidentManagementSection';
import { SectionId } from '../types';

export const IncidentManagementPage: React.FC = () => {
  usePageTitle(
    'Ticket Prioritization & Outage Communication',
    'Customer care triage protocols: P1-P3 prioritization matrix, crisis communication during platform outages, and empathetic de-escalation.'
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
      <IncidentManagementSection onNavigate={handleNavigate} />
    </div>
  );
};
