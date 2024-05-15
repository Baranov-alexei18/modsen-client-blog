import { subtle } from 'crypto';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { CategoryCard } from '@/components/ui-components/card/card-category';
import { categories } from '@/constants/serverData';

import styles from './styles.module.scss';

export const SectionCategory = () => {
  const router = useRouter();

  const handleClickToCategoryPage = () => {
    router.push('/category');
  };

  return (
    <section className={styles.sectionCategory}>
      <h2 className={styles.sectionTitle}>Choose A Catagory</h2>
      <div className={styles.categoryContainer}>
        {categories.map(({ src, title, subtitle }) => (
          <CategoryCard
            key={src}
            src={src}
            title={title}
            subTitle={subtitle}
            onHandleClick={handleClickToCategoryPage}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionCategory;
