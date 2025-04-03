import React from 'react';

interface NavigationDotsProps {
  sections: string[];
  activeSection: string;
  sectionTitles?: Record<string, string>;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ 
  sections, 
  activeSection,
  sectionTitles = {} 
}) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-5 hidden md:flex">
      {sections.map((section) => (
        <div key={section} className="group relative flex items-center">
          <span className="absolute right-8 whitespace-nowrap px-2 py-1 rounded bg-blue-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {sectionTitles[section] || section}
          </span>
          <a 
            href={`#${section}`} 
            className={`nav-dot w-4 h-4 rounded-full border-2 border-blue-800 bg-gray-200 hover:bg-orange-500 ${activeSection === section ? 'active' : ''}`}
            aria-label={`Navigate to ${sectionTitles[section] || section} section`}
          />
        </div>
      ))}
    </div>
  );
};

export default NavigationDots;
