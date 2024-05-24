import React from 'react';
import Image from 'next/image';

import { PostDataProps } from '@/types/post';

import styles from './styles.module.scss';

export const PostCard = ({ data, handleClickPost }: PostDataProps) => {
  const {
    title, categoryTitle, subtitle, src,
  } = data;
  return (
    <div className={styles.card} onClick={handleClickPost} aria-hidden>
      <div className={styles.image}>
        <Image src={src} alt={title} fill />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{categoryTitle.toUpperCase()}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{subtitle}</p>
      </div>
    </div>
  );
};
