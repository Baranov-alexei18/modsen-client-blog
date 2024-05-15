import { JSX, useEffect, useState } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from '../theme/styles.module.scss';

export const withVisibilityObserver = (WrappedComponent: any) => {
  const ComponentWithVisibility = (props: any) => {
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
