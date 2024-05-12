import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type ButtonType = {
  children: ReactNode,
  backgroundColor: string,
  onClick: () => void;
}
export const ButtonApp = (
  { children, backgroundColor, onClick }: Partial<ButtonType>,
) => (
  <button
    type="button"
    className={styles.button}
    style={{ backgroundColor }}
    onClick={onClick}
  >
    {children}
  </button>
);
