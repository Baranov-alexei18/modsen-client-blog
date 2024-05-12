import { subtle } from 'crypto';
import Image from 'next/image';
import Link from 'next/link';

import { ButtonApp } from '@/components/ui-components/button';
import { CategoryCard } from '@/components/ui-components/card/card-category';
import { categories } from '@/constants/serverData';

import styles from './styles.module.scss';

export const SectionStarted = () => (
  <section className={styles.sectionStarted}>
    <div className={styles.imageContainer}>
      <Image
        src="/image/png/peopleOnBeach.png"
        alt="Image why started"
        fill
        objectFit="cover"
      />
      <div className={styles.overlayWrapper}>
        <h4>WHY WE STARTED </h4>
        <p className={styles.title}>
          It started out as a simple idea and evolved into our passion
        </p>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <ButtonApp backgroundColor="var(--color-yellow)">{'Discover our story >'}</ButtonApp>
      </div>
    </div>
  </section>
);
