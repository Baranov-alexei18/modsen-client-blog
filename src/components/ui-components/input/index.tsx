import { InputType } from './types';

import styles from './styles.module.scss';

export const InputApp = ({
  value, placeholder, onChange, error, type, name, onBlur, isTouch,
}: Partial<InputType>) => (
  <div className={styles.wrapper}>
    <input
      type={type}
      name={name}
      value={value}
      data-touch={isTouch}
      className={`${styles.input} ${error && styles.invalid}`}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    {isTouch && error && <p className={styles.error}>{error}</p>}
  </div>
);
