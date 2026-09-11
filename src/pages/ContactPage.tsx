import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { ContactSection } from '../components/sections/ContactSection';

export const ContactPage: React.FC = () => {
  usePageTitle(
    'Contact & Interview Availability',
    'Get in touch with Olumide Oderinde for international remote opportunities in Customer Support, Customer Experience, and Customer Care.'
  );

  return (
    <div className="w-full">
      <ContactSection onNavigate={() => {}} />
    </div>
  );
};
