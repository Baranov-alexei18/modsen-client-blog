import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { PostCard } from '@/components/ui-components/card/card-blog-post';
import { LINK_BLOG_POST } from '@/constants/links';

import { PostsAllTypes } from './types';

import styles from './styles.module.scss';

export const SectionPosts = ({
  data, clickNext, clickPrev, disableNext, disablePrev,
}: PostsAllTypes) => {
  const t = useTranslations('pages.home.posts');
  const tBtn = useTranslations('pages.blog');
  const router = useRouter();
  const locale = useLocale();

  const handleClickToBlogPostPage = (id: number) => {
    router.push(`/${locale}/${LINK_BLOG_POST.path}/${id}`);
  };

  return (
    <div className={styles.allPosts}>
      <h1>{t('allPost')}</h1>
      <div className={styles.postsList}>
        {data.map((post) => (
          <PostCard
            key={post.id}
            data={post}
            handleClickPost={() => handleClickToBlogPostPage(post.id)}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button type="button" className={styles.prev} onClick={clickPrev} disabled={disablePrev}>{tBtn('prev')}</button>
        <button type="button" className={styles.next} onClick={clickNext} disabled={disableNext}>{tBtn('next')}</button>
      </div>
    </div>
  );
};
