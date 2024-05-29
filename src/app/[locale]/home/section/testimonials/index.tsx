'use client';

import { useEffect, useState } from 'react';
import { Slider } from '@alexeika/client-blog-ui-kit';
import { useTranslations } from 'next-intl';

import { getReviews } from '@/api/getReviews';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionTestimonial = () => {
  const t = useTranslations('pages.home.testimonials');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getDataReview = async () => {
      const reviewsData = await getReviews();
      setReviews(reviewsData);
    };

    getDataReview();
  }, []);

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
          {reviews.length && <Slider data={reviews} />}
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionTestimonial);
