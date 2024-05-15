import { SetStateAction, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';

import { ButtonApp } from '@/components/ui-components/button';
import { InputApp } from '@/components/ui-components/input';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const getToSubscribeEmail = (e: { target: { value: string } }, email: boolean) => {
    setEmail(e.target.value);
    setErrorEmail(!email);
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
        error="Invalid email"
      />
      <ButtonApp
        backgroundColor="var(--color-yellow)"
        onClick={sendEmail}
        disabled={errorEmail}
      >
        Subscribe
      </ButtonApp>
    </form>
  );
};
