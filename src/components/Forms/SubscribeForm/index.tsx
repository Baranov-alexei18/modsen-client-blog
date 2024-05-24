import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { InputApp } from '@/components/ui-components/input';
import { Toast } from '@/components/ui-components/toast';

import { options } from './options';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const t = useTranslations('forms.subscribe');
  const [pending, setPending] = useState(false);
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  const {
    handleChange, handleBlur, values, touched, errors,
  } = useFormik(options);

  const onSubmitForm = () => {
    setPending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_SUBSCRIBE!,
        { to_email: values.email },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY!,
        },
      )
      .then(
        () => {
          values.email = '';
          setToast({ message: t('successMessage'), type: 'success' });
        },
        (error) => {
          setToast({ message: t('errorMessage'), type: 'error' });
        },
      )
      .finally(() => {
        setPending(false);
      });
  };

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
      <form className={styles.wrapper} onSubmit={onSubmitForm}>
        <span className={styles.info}>
          {t('title')}
        </span>
        <div className={styles.form}>
          <InputApp
            type="email"
            name="email"
            placeholder={t('placeholder')}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            isTouch={Boolean(touched.email)}
          />
          <ButtonApp
            {...YellowButton}
            onClick={onSubmitForm}
            disabled={Boolean(errors.email)}
          >
            {pending ? t('loading') : t('subscribe')}
          </ButtonApp>
        </div>
      </form>
    </>
  );
};
