import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type ButtonType = {
  type: 'button' | 'submit' | 'reset',
  children: ReactNode,
  backgroundColor: string,
  onClick: () => void;
  disabled: boolean;
}
export const ButtonApp = (
  {
    children, backgroundColor, onClick, disabled, type,
  }: Partial<ButtonType>,
) => (
  <button
    type={type || 'button'}
    className={styles.button}
    style={{ backgroundColor }}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
