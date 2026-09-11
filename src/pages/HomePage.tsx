import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { HomeSection } from '../components/sections/HomeSection';
import { SectionId } from '../types';

export const HomePage: React.FC = () => {
  usePageTitle(
    'Customer Support & Experience Specialist',
    'Olumide Oderinde - Customer Support & Experience Specialist specializing in empathetic de-escalation, rapid first-contact resolution, omnichannel care (Zendesk, Intercom), and customer retention.'
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
      <HomeSection onNavigate={handleNavigate} />
    </div>
  );
};
