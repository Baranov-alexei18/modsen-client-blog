import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

const SectionAboutUs = () => {
  const t = useTranslations('pages.home.aboutUs');
  const locale = useLocale();

  return (
    <section className={styles.sectionAboutUs}>
      <div className={styles.colorBar} />
      <div className={styles.AboutUsWrapper}>
        <div className={styles.InfoWrapper}>
          <h2>{t('sectionTitleAboutUs')}</h2>
          <p className={styles.title}>
            {t('titleAboutUs')}
          </p>
          <p className={styles.subtitle}>
            {t('subtitleAboutUs')}
          </p>
          <Link href={`${locale}/about-us`}>{t('link')}</Link>
        </div>
        <div className={styles.InfoWrapper}>
          <h2>{t('sectionTitleMision')}</h2>
          <p className={styles.secondTitle}>
            {t('titleMision')}
          </p>
          <p className={styles.subtitle}>
            {t('subtitleMision')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionAboutUs);
