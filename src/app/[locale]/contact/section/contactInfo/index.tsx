import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const ContactInfo = () => {
  const t = useTranslations('pages.contact');
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{t('contactUs')}</h2>
        <h1>{t('title')}</h1>
        <p>
          {t('subtitle')}
        </p>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.infoBlock}>
          <p>{t('worksHoursTitle')}</p>
          <h3>{t('worksDays')}</h3>
          <h3>{t('worksHours')}</h3>
          <h4>{t('support')}</h4>
        </div>
        <div className={styles.infoBlock}>
          <p>{t('contactUs')}</p>
          <h3>020 7993 2905</h3>
          <h4>hello@finsweet.com</h4>
        </div>
      </div>
    </div>
  );
};
