import Image from 'next/image';

import { CategoryCardType } from './types';

import styles from './styles.module.scss';

export const CategoryCard = ({ src, title, subTitle }: CategoryCardType) => (
  <div className={styles.card}>
    <Image
      width="48"
      height="48"
      src={src}
      alt="icon-category"
      className={styles.icon}
    />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.subtitle}>{subTitle}</p>
  </div>
);
