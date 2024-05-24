'use client';

import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { InputApp } from '@/components/ui-components/input';
import { Toast } from '@/components/ui-components/toast';

import { initialValues, validationSchema } from './options';

import styles from './styles.module.scss';

export const ContactForm = () => {
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const t = useTranslations('forms.contact');

  const {
    handleSubmit, handleChange, handleBlur, values, touched, errors,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: {
      email: string,
      fullName: string,
      queryRelated: string,
      message: string,
    }, { resetForm }: { resetForm: () => void }) => {
      emailjs
        .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUESTION!,
        {
          from_email: values.email,
          name: values.fullName,
          query: values.queryRelated,
          message: values.message,
        },
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
        );
    },
  });

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <>
      { toast && (
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputApp
          type="text"
          name="fullName"
          placeholder={t('name')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          error={errors.fullName}
          isTouch={Boolean(touched.fullName)}
        />
        <InputApp
          type="email"
          name="email"
          placeholder={t('email')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
          isTouch={Boolean(touched.email)}
        />
        <select
          name="queryRelated"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.queryRelated}
        >
          <option value="" label={t('queryRelated')} />
          <option value="HR" label="HR" />
          <option value="support" label={t('support')} />
          <option value="sales" label={t('sales')} />
        </select>
        {touched.queryRelated && errors.queryRelated ? (
          <span className={styles.error}>{`${errors.queryRelated}`}</span>
        ) : null}

        <textarea
          name="message"
          placeholder={t('message')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        />
        {touched.message && errors.message ? (
          <span className={styles.error}>{`${errors.message}`}</span>
        ) : null}

        <ButtonApp {...YellowButton} type="submit">{t('btnTitle')}</ButtonApp>
      </form>
    </>
  );
};
