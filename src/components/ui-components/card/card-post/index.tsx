import { formatDate } from '@/helpers/formatDate';

import { PostCardType } from './types';

import styles from './styles.module.scss';

export const PostCard = ({
  title, name, date, onHandleClick,
}: PostCardType) => (
  <div className={styles.card} onClick={onHandleClick} aria-hidden>
    <div className={styles.authorInfo}>
      <p>
        By
        <span>
          {` ${name} `}
        </span>
        |
        {` ${formatDate(date)}`}
      </p>
    </div>
    <h3 className={styles.cardTitle}>
      {title}
    </h3>
  </div>
);
