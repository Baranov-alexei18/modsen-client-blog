'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { getCategories } from '@/api/getCategories';
import { getFilteredPosts } from '@/api/getFilteredPosts';
import { PostCard } from '@/app/[locale]/blog/post-card';
import { CategorySearchCard } from '@/components/ui-components/card/card-category-search';
import { Chip } from '@/components/ui-components/chip';
import { ElasticSearch } from '@/components/ui-components/elastic-search-input';
import { tags } from '@/constants';
import { PostDataType } from '@/types/post';

import styles from './styles.module.scss';

export const ListPosts = ({ slug }: { slug: string }) => {
  const t = useTranslations('pages.category');
  const locale = useLocale();

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(slug);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getCategoriesData();
  }, []);

  useEffect(() => {
    const getPostsData = async () => {
      setIsLoading(true);
      const data = await getFilteredPosts(activeCategory, activeTags);
      setFilteredPosts(data);
      setIsLoading(false);
    };
    getPostsData();
  }, [activeCategory, activeTags, activeTags.length]);

  const setCategory = (id: string) => {
    if (id === activeCategory) {
      setActiveCategory(null);
      return;
    }
    setActiveCategory(id);
  };

  const setTags = (tag: string) => {
    if (activeTags?.includes(tag)) {
      setActiveTags(activeTags.filter((item) => item !== tag));
      return;
    }
    setActiveTags((prev) => [...prev!, tag]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.listPosts}>
        {isLoading && <p>{t('loading')}</p>}
        {!filteredPosts.length && <h2 className={styles.noPosts}>{t('nonPosts')}</h2>}
        {!isLoading
          && filteredPosts
          && filteredPosts.map((item: PostDataType) => (
            <Link key={item.id} href={`/${locale}/blog-post/${item.id}`}>
              <PostCard data={item} />
            </Link>
          ))}
      </div>
      <div className={styles.wrapperSearch}>
        <ElasticSearch data={tags} onHandleClick={setTags} />
        <h2>{t('categories')}</h2>
        <div className={styles.wrapperCategories}>
          {categories && categories.map(({ src, title, id }) => (
            <CategorySearchCard
              key={src}
              src={src}
              className={activeCategory === id ? styles.active : ''}
              title={title}
              onHandleClick={() => setCategory(id)}
            />
          ))}
        </div>
        <h2>{t('tags')}</h2>
        <div className={styles.tags}>
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                className={activeTags!.includes(tag) ? styles.active : ''}
                onHandleClick={() => setTags(tag)}
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
