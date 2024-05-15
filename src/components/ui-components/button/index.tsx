import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type ButtonType = {
  children: ReactNode,
  backgroundColor: string,
  onClick: () => void;
  disabled: boolean;
}
export const ButtonApp = (
  {
    children, backgroundColor, onClick, disabled,
  }: Partial<ButtonType>,
) => (
  <button
    type="button"
    className={styles.button}
    style={{ backgroundColor }}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
