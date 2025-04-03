import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  onVisibilityChange?: (id: string, isVisible: boolean) => void;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  onVisibilityChange,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver({ 
    ref: sectionRef, 
    threshold: 0.5 
  });

  React.useEffect(() => {
    if (onVisibilityChange) {
      onVisibilityChange(id, isIntersecting);
    }
  }, [id, isIntersecting, onVisibilityChange]);
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
