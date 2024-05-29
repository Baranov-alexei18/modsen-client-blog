'use client';

import { useEffect, useState } from 'react';
import { ChipApp, ElasticSearch } from '@alexeika/client-blog-ui-kit';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { getCategories } from '@/api/getCategories';
import { getFilteredPosts } from '@/api/getFilteredPosts';
import { PostCard } from '@/components/Cards/card-blog-post';
import { CategorySearchCard } from '@/components/Cards/card-category-search';
import { tags } from '@/constants';
import { LINK_BLOG_POST } from '@/constants/links';
import { PostDataType } from '@/types/post';

import styles from './styles.module.scss';

export const ListPosts = ({ slug }: { slug: string }) => {
  const t = useTranslations('pages.category');
  const locale = useLocale();

  const [filteredPosts, setFilteredPosts] = useState<PostDataType[] | undefined>([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(parseFloat(slug));
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
      const data = await getFilteredPosts(activeCategory?.toString(), activeTags);
      setFilteredPosts(data);
      setIsLoading(false);
    };
    getPostsData();
  }, [activeCategory, activeTags, activeTags.length]);

  const setCategory = (id: number) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  const setTags = (tag: string) => {
    setActiveTags((prev) => (
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.listPosts}>
        {isLoading && <p>{t('loading')}</p>}
        {!filteredPosts!.length && <h2 className={styles.noPosts}>{t('nonPosts')}</h2>}
        {!isLoading
          && filteredPosts
          && filteredPosts.map((item: PostDataType) => (
            <Link key={item.id} href={`/${locale}/${LINK_BLOG_POST.path}/${item.id}`}>
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
              onHandleClick={setCategory.bind(null, id)}
            />
          ))}
        </div>
        <h2>{t('tags')}</h2>
        <div className={styles.tags}>
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <ChipApp
                key={tag}
                className={activeTags!.includes(tag) ? styles.active : ''}
                onHandleClick={setTags.bind(null, tag)}
              >
                {tag}
              </ChipApp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
