import Image from 'next/image';

import { CategoryCardType } from './types';

import styles from './styles.module.scss';

export const CategorySearchCard = ({
  src, title, onHandleClick, className,
}: Partial<CategoryCardType>) => (
  <div className={`${styles.card} ${className}`} onClick={onHandleClick} aria-hidden>
    <Image
      width="48"
      height="48"
      src={src!}
      alt="icon-category"
      className={styles.icon}
    />
    <h3 className={styles.title}>{title}</h3>
  </div>
);
