import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const SectionAboutUs = () => {
  const t = useTranslations('pages.aboutUs');
  const locale = useLocale();

  return (
    <section className={styles.wrapper}>
      <div className={styles.headerSection}>
        <div className={styles.headerText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.text}>
          <h2>{t('aboutUs')}</h2>
          <h1>{t('title')}</h1>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/image/png/peopleOnBeach.png"
            alt="Image about us"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>12+</h3>
            <p>{t('blogsPublish')}</p>
          </div>
          <div className={styles.stat}>
            <h3>18K+</h3>
            <p>{t('viewsOnFinsweet')}</p>
          </div>
          <div className={styles.stat}>
            <h3>30K+</h3>
            <p>{t('activeUser')}</p>
          </div>
          <div className={styles.colorBar} />

        </div>
      </div>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.InfoWrapper}>
          <h2>{t('sectionTitleMision')}</h2>
          <p className={styles.title}>
            {t('titleMision')}
          </p>
          <p className={styles.subtitle}>
            {t('subtitleMision')}
          </p>
        </div>
        <div className={styles.InfoWrapper}>
          <h2>{t('sectionTitleVision')}</h2>
          <p className={styles.title}>
            {t('titleVision')}
          </p>
          <p className={styles.subtitle}>
            {t('subtitleVision')}
          </p>
        </div>
      </div>
    </section>
  );
};
