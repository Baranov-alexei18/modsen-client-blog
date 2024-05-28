'use client';

import {
  ComponentType, FC, useEffect, useState,
} from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { VisibilityObserverProps } from '@/types';

import styles from '../theme/styles.module.scss';

export const withVisibilityObserver = <P extends object>(
  WrappedComponent: ComponentType<P & VisibilityObserverProps>,
): FC<P> => {
  const ComponentWithVisibility: FC<P> = (props) => {
    const [isVisible, ref] = useIntersectionObserver();
    const [isComponentVisible, setIsComponentVisible] = useState(false);

    useEffect(() => {
      if (isVisible) {
        setIsComponentVisible(true);
      }
    }, [isVisible]);

    return (
      <div className={`${styles.section} ${isComponentVisible ? styles.visible : ''}`} ref={ref}>
        <WrappedComponent {...props} isVisible={isComponentVisible} />
      </div>
    );
  };

  return ComponentWithVisibility;
};
