'use client';

import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { InputApp } from '@/components/ui-components/input';

import { options } from './options';

import styles from './styles.module.scss';

export const ContactForm = () => {
  const {
    handleSubmit, handleChange, handleBlur, values, touched, errors,
  } = useFormik(options);
  const t = useTranslations('forms.contact');

  return (
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
  );
};
