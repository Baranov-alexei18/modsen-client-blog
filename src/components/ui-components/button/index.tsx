import { ReactNode } from 'react';

import styles from './styles.module.scss';

export const ButtonApp = (
  { children, backgroundColor }: Partial<{ children: ReactNode, backgroundColor: string }>,
) => (
  <button type="button" className={styles.button} style={{ backgroundColor }}>
    {children}
  </button>
);
