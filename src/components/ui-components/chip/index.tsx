import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

type TagType = {
    className: string,
    children: ReactNode,
    onHandleClick: () => void,
};

export const Chip = ({ className, children, onHandleClick }: Partial<TagType>) => (
  <span
    className={`${styles.wrapper} ${className}`}
    onClick={onHandleClick}
    aria-hidden
  >
    {children}
  </span>
);
