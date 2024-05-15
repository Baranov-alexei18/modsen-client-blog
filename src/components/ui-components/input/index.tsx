import { ReactNode, useState } from 'react';

import { isValidEmail } from '@/helpers/isValidEmail';

import styles from './styles.module.scss';

type InputType = {
  value: string,
  placeholder: string,
  onChange: (e: { target: { value: string } }, email: boolean) => void,
  error: string,
}

export const InputApp = ({
  value, placeholder, onChange, error,
}: Partial<InputType>) => {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const email = isValidEmail(inputValue);

    setIsValid(email);

    if (!inputValue.length) {
      setIsValid(true);
    }

    onChange!(e, email);
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        className={`${styles.input} ${!isValid && styles.invalid}`}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {!isValid && <p className={styles.error}>{error}</p>}
    </div>
  );
};
