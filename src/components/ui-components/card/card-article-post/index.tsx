'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/helpers/formatDate';
import { PostDataProps } from '@/types/post';

import styles from './styles.module.scss';

export const ArticlePostCard = ({ data, locale }: PostDataProps & {locale: string}) => {
  const {
    src, title, subtitle, date_created, authorName, id,
  } = data;

  return (
    <Link className={styles.articleCard} href={`/${locale}/blog-post/${id}`}>
      <Image src={src} alt="Article" width={200} height={200} className={styles.articleImage} />
      <div className={styles.articleContent}>
        <div className={styles.articleInfo}>
          <p>
            By
            <span className={styles.name}>
              {` ${authorName} `}
            </span>
            |
            {` ${formatDate(date_created)}`}
          </p>
        </div>
        <h2 className={styles.articleTitle}>
          {title}
        </h2>
        <p className={styles.articleDescription}>
          {subtitle}
        </p>
      </div>
    </Link>
  );
};
