import React from 'react';

interface NavigationDotsProps {
  sections: string[];
  activeSection: string;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ sections, activeSection }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4 hidden md:flex">
      {sections.map((section) => (
        <a 
          key={section}
          href={`#${section}`} 
          className={`nav-dot w-3 h-3 rounded-full bg-gray-400 hover:bg-orange-500 ${activeSection === section ? 'active' : ''}`}
          aria-label={`Navigate to ${section} section`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
