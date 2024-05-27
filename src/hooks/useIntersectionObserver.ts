'use client';

import {
  MutableRefObject, useEffect, useRef, useState,
} from 'react';

import { IntersectionObserverOptions } from '@/types';

export const useIntersectionObserver = (
  options?: IntersectionObserverOptions,
): [boolean, MutableRefObject<HTMLDivElement | null>] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

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
