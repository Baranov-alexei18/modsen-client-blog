'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { getCategories } from '@/api/getCategories';
import { CategoryCard } from '@/components/ui-components/card/card-category';
import { CategoryCardType } from '@/components/ui-components/card/card-category-search/types';
import { LINK_CATEGORY } from '@/constants/links';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionCategory = () => {
  const [categories, setCategories] = useState([]);
  const locale = useLocale();
  const t = useTranslations('pages.home.category');

  useEffect(() => {
    const getCategory = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getCategory();
  }, []);

  return (
    <section className={styles.sectionCategory}>
      <h2 className={styles.sectionTitle}>{t('sectionTitle')}</h2>
      <div className={styles.categoryContainer}>
        {categories.length && categories.map(({
          src, title, subtitle, id,
        }:CategoryCardType) => (
          <Link key={src} href={`/${locale}/${LINK_CATEGORY.path}/${id}`}>
            <CategoryCard
              src={src}
              title={title}
              subTitle={subtitle}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionCategory);
