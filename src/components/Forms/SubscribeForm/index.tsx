import { SetStateAction, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';

import { ButtonApp } from '@/components/ui-components/button';
import { InputApp } from '@/components/ui-components/input';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const getToSubscribeEmail = (e: { target: { value: string }}) => {
    setEmail(e.target.value);
  };

  const templateParams = {
    name: 'Alex',
    to_email: email,
  };

  const sendEmail = () => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY!,
        },
      )
      .then(
        () => {
          setEmail('');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className={styles.wrapper} onSubmit={sendEmail}>
      <span className={styles.info}>
        Subscribe to our news letter to get latest updates and news
      </span>
      <InputApp
        value={email}
        placeholder="Enter Your Email"
        onChange={getToSubscribeEmail}
      />
      <ButtonApp
        backgroundColor="var(--color-yellow)"
        onClick={sendEmail}
      >
        Subscribe
      </ButtonApp>
    </form>
  );
};
