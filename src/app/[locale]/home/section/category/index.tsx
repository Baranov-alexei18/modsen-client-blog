import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { CategoryCard } from '@/components/ui-components/card/card-category';
import { LINK_CATEGORY } from '@/constants/links';
import { categories } from '@/constants/serverData';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionCategory = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('pages.home.category');

  const handleClickToCategoryPage = (id: number) => {
    router.push(`/${locale}/${LINK_CATEGORY.path}/${id}`);
  };

  return (
    <section className={styles.sectionCategory}>
      <h2 className={styles.sectionTitle}>{t('sectionTitle')}</h2>
      <div className={styles.categoryContainer}>
        {categories.map(({
          src, title, subtitle, id,
        }) => (
          <CategoryCard
            key={src}
            src={src}
            title={title}
            subTitle={subtitle}
            onHandleClick={() => handleClickToCategoryPage(id)}
          />
        ))}
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionCategory);
