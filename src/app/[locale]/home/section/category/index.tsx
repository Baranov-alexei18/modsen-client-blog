import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { CategoryCard } from '@/components/ui-components/card/card-category';
import { categories } from '@/constants/serverData';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionCategory = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('pages.home.category');

  const handleClickToCategoryPage = () => {
    router.push(`${locale}/category`);
  };

  return (
    <section className={styles.sectionCategory}>
      <h2 className={styles.sectionTitle}>{t('sectionTitle')}</h2>
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

export default withVisibilityObserver(SectionCategory);
