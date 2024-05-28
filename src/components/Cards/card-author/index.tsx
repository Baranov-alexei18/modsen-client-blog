'use client';

import { SocialGroups } from '@alexeika/client-blog-ui-kit';
import Image from 'next/image';

import { AuthorCardType } from './types';

import styles from './styles.module.scss';

export const AuthorCard = ({
  src, title, subTitle, social,
}: Partial<AuthorCardType>) => (
  <div className={styles.card}>
    <Image
      width="128"
      height="128"
      src={src!}
      alt="icon-category"
      className={styles.icon}
    />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.subtitle}>{subTitle}</p>
    {social?.length && <SocialGroups data={social!} />}
  </div>
);
