import Link from 'next/link';

import { formatDate } from '@/helpers/formatDate';

import { PostCardType } from './types';

import styles from './styles.module.scss';

export const PostCard = ({
  title, name, date, locale, id,
}: Partial<PostCardType & {locale: string}>) => (
  <Link className={styles.card} href={`${locale}/blog-post/${id}`}>
    <div className={styles.authorInfo}>
      <p>
        By
        <span>
          {` ${name} `}
        </span>
        |
        {` ${formatDate(date!)}`}
      </p>
    </div>
    <h3 className={styles.cardTitle}>
      {title}
    </h3>
  </Link>
);
