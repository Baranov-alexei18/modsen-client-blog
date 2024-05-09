import { SetStateAction, useState } from 'react';

import { ButtonApp } from '@/components/ui-components/button';
import { InputApp } from '@/components/ui-components/input';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const getToSubscribeEmail = (e: { target: { value: string }}) => {
    setEmail(e.target.value);
  };

  return (
    <form className={styles.wrapper}>
      <span className={styles.info}>
        Subscribe to our news letter to get latest updates and news
      </span>
      <InputApp placeholder="Enter Your Email" onChange={getToSubscribeEmail} />
      <ButtonApp backgroundColor="var(--color-yellow)"> Subscribe</ButtonApp>
    </form>
  );
};
