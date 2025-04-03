import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight - windowHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      setProgress(scrollPercentage);
    };

    // Initial call
    updateProgress();
    
    // Event listeners
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 w-1.5 h-full bg-transparent z-50">
      <div 
        className="h-0 w-full bg-gradient-to-b from-orange-500 to-blue-800 transition-all duration-300"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
