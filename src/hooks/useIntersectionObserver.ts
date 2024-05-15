'use client';

import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = {
  root: Element | null;
  rootMargin: string;
  threshold: number | number[];
}

export const useIntersectionObserver = (
  options?: Partial<IntersectionObserverOptions>,
): [boolean, any] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options,
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [isVisible, ref];
};
