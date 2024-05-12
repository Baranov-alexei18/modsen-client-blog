import { subtle } from 'crypto';
import Image from 'next/image';
import Link from 'next/link';

import { CategoryCard } from '@/components/ui-components/card/card-category';
import { categories } from '@/constants/serverData';

import styles from './styles.module.scss';

export const SectionCategory = () => (
  <section className={styles.sectionCategory}>
    <h2 className={styles.sectionTitle}>Choose A Catagory</h2>
    <div className={styles.categoryContainer}>
      {categories.map(({ src, title, subtitle }) => (
        <CategoryCard
          key={src}
          src={src}
          title={title}
          subTitle={subtitle}
        />
      ))}
    </div>
  </section>
);

export default SectionCategory;
