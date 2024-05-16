import { useTranslations } from 'next-intl';

import { Slider } from '@/components/ui-components/slider';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionTestimonial = () => {
  const t = useTranslations('pages.home.testimonials');

  return (
    <section className={styles.SectionTestimonial}>
      <div className={styles.TestimonialWrapper}>
        <div className={styles.InfoWrapper}>
          <h2>{t('sectionTitle')}</h2>
          <p className={styles.title}>
            {t('title')}
          </p>
          <p className={styles.subtitle}>
            {t('subtitle')}
          </p>
        </div>
        <div className={styles.InfoWrapper}>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionTestimonial);