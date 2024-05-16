import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { InputApp } from '@/components/ui-components/input';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const t = useTranslations('forms.subscribe');

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
        {t('title')}
      </span>
      <InputApp
        value={email}
        placeholder={t('placeholder')}
        onChange={getToSubscribeEmail}
        error={t('invalidData')}
      />
      <ButtonApp
        {...YellowButton}
        onClick={sendEmail}
        disabled={errorEmail}
      >
        {t('subscribe')}
      </ButtonApp>
    </form>
  );
};
