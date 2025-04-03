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
    <>
      {/* Vertical progress bar */}
      <div className="fixed top-0 right-0 w-2.5 h-full bg-gray-200 z-50">
        <div 
          className="h-0 w-full bg-gradient-to-b from-orange-500 to-blue-800 transition-all duration-300"
          style={{ height: `${progress}%` }}
        />
      </div>
      
      {/* Progress percentage indicator */}
      <div className="fixed bottom-4 right-4 z-50 bg-blue-900 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
        {Math.min(Math.round(progress), 100)}%
      </div>
    </>
  );
};

export default ProgressBar;
