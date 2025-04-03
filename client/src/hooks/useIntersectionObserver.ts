import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<Element>;
  options?: IntersectionObserverInit;
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver({
  ref,
  options = {},
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: options.root || null,
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options.root, rootMargin, threshold]);

  return isIntersecting;
}
