import React from 'react';
import Image from 'next/image';

import { PostDataProps } from '@/types/post';

import styles from './styles.module.scss';

export const PostCard = ({ data }: PostDataProps) => {
  const {
    title, category, subtitle, src,
  } = data;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={src} alt={title} fill />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{category.toUpperCase()}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{subtitle}</p>
      </div>
    </div>
  );
};
