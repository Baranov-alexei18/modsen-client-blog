import React, { useEffect } from 'react';

import { ToastProps } from './types';

import styles from './styles.module.scss';

export const Toast = ({ message, type, onClose }:ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}
    </div>
  );
};
