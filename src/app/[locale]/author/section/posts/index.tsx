import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { PostCard } from '@/app/[locale]/blog/post-card';
import { PostDataType } from '@/types/post';

import styles from './styles.module.scss';

export const SectionAuthorPosts = ({ data }: {data: PostDataType[]}) => {
  const t = useTranslations('pages.home.posts');
  const locale = useLocale();

  return (
    <div className={styles.wrapper}>
      <h1>My Posts</h1>
      <div className={styles.postsList}>
        {data.map((post) => (
          <Link href={`/${locale}/blog-post/${post.id}`} key={post.id}>
            <PostCard
              data={post}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
