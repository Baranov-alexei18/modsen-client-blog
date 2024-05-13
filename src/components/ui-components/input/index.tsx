import { ReactNode } from 'react';

import styles from './styles.module.scss';

type InputType = {
  value: string,
  placeholder: string,
  onChange: (e: { target: { value: string } }) => void
}

export const InputApp = ({ value, placeholder, onChange }: InputType) => (
  <input
    value={value}
    className={styles.wrapper}
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
  />
);
