import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { CustomerSuccessSection } from '../components/sections/CustomerSuccessSection';
import { SectionId } from '../types';

export const CustomerSuccessPage: React.FC = () => {
  usePageTitle(
    'Customer Experience & Retention Strategy',
    'Customer retention strategy: Early churn risk detection, onboarding support, Voice-of-Customer reporting, and maintaining 97%+ CSAT.'
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
      <CustomerSuccessSection onNavigate={handleNavigate} />
    </div>
  );
};
