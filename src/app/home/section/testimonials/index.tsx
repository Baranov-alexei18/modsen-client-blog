import Image from 'next/image';
import Link from 'next/link';

import { ButtonApp } from '@/components/ui-components/button';
import { Slider } from '@/components/ui-components/slider';

import styles from './styles.module.scss';

export const SectionTestimonial = () => (
  <section className={styles.SectionTestimonial}>
    <div className={styles.TestimonialWrapper}>
      <div className={styles.InfoWrapper}>
        <h2>TESTIMONIALS</h2>
        <p className={styles.title}>
          What people say about our blog
        </p>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <div className={styles.InfoWrapper}>
        <Slider />
      </div>
    </div>
  </section>
);
