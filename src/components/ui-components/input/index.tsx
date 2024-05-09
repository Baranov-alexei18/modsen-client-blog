import { ReactNode } from 'react';

import styles from './styles.module.scss';

type InputType = {
    placeholder: string,
    onChange: (e: { target: { value: string }}) => void
}

export const InputApp = ({ placeholder, onChange }: InputType) => (
  <input
    className={styles.wrapper}
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
  />
);
