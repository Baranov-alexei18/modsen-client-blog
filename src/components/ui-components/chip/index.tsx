import React from 'react';

import { TagType } from './types';

import styles from './styles.module.scss';

export const Chip = ({ className, children, onHandleClick }: Partial<TagType>) => (
  <span
    className={`${styles.wrapper} ${className}`}
    onClick={onHandleClick}
    aria-hidden
  >
    {children}
  </span>
);
