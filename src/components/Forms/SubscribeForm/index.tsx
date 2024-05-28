import { useCallback, useState } from 'react';
import { ButtonApp, InputApp, Toast } from '@alexeika/client-blog-ui-kit';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

import { initialValues, validationSchema } from './options';

import styles from './styles.module.scss';

export const SubscribeForm = () => {
  const t = useTranslations('forms.subscribe');
  const [pending, setPending] = useState(false);
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const {
    handleSubmit, handleChange, handleBlur, values, touched, errors,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: {
      email: string,
    }, { resetForm }: { resetForm: () => void }) => {
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
            resetForm();
            setToast({ message: t('successMessage'), type: 'success' });
          },
          (error) => {
            setToast({ message: t('errorMessage'), type: 'error' });
          },
        )
        .finally(() => {
          setPending(false);
        });
    },
  });

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
      <form className={styles.wrapper} onSubmit={handleSubmit}>
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
            backgroundColor="var(--color-yellow)"
            disabled={Boolean(errors.email)}
            type="submit"
          >
            {pending ? t('loading') : t('subscribe')}
          </ButtonApp>
        </div>
      </form>
    </>
  );
};
