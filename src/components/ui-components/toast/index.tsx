import React, { useEffect } from 'react';

import { ToastProps } from './types';

import styles from './styles.module.scss';

const TOAST_VISIBLE = 3000;

export const Toast = ({ message, type, onClose }:ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, TOAST_VISIBLE);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}
    </div>
  );
};
