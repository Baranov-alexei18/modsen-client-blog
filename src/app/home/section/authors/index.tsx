import Image from 'next/image';
import Link from 'next/link';

import { ButtonApp } from '@/components/ui-components/button';
import { AuthorCard } from '@/components/ui-components/card/card-author';
import { authors } from '@/constants/serverData';

import styles from './styles.module.scss';

export const SectionAuthor = () => (
  <section className={styles.sectionAuthor}>
    <h2 className={styles.sectionTitle}>Choose A Catagory</h2>
    <div className={styles.categoryContainer}>
      {authors.map(({ src, title, subtitle }) => (
        <AuthorCard
          key={src}
          src={src}
          title={title}
          subTitle={subtitle}
        />
      ))}
    </div>
  </section>
);
