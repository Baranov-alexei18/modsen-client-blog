'use client';

import { useCallback, useState } from 'react';
import {
  ButtonApp, InputApp, SelectApp, Toast,
} from '@alexeika/client-blog-ui-kit';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

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
          cyId="contact-form-name"
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
          cyId="contact-form-email"
          type="email"
          name="email"
          placeholder={t('email')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
          isTouch={Boolean(touched.email)}
        />
        <SelectApp
          data-testid="contact-form-queryRelated"
          name="queryRelated"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.queryRelated}
        >
          <option value="" label={t('queryRelated')} />
          <option value="HR" label="HR" />
          <option value="support" label={t('support')} />
          <option value="sales" label={t('sales')} />
        </SelectApp>
        {touched.queryRelated && errors.queryRelated ? (
          <span className={styles.error}>{`${errors.queryRelated}`}</span>
        ) : null}

        <textarea
          data-testid="contact-form-message"
          name="message"
          placeholder={t('message')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        />
        {touched.message && errors.message ? (
          <span className={styles.error}>{`${errors.message}`}</span>
        ) : null}

        <ButtonApp
          backgroundColor="var(--color-yellow)"
          cyId="contact-form-submit"
          type="submit"
        >
          {t('btnTitle')}
        </ButtonApp>
      </form>
    </>
  );
};
