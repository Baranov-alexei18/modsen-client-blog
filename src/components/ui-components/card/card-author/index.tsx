import Image from 'next/image';
import Link from 'next/link';

import { SOCIAL_NETWORK_LINKS } from '@/constants/links';

import { AuthorCardType } from './types';

import styles from './styles.module.scss';

export const AuthorCard = ({
  src, title, subTitle,
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
    <div className={styles.iconGroup}>
      {SOCIAL_NETWORK_LINKS.map((item) => (
        <p
          key={item.name}
        >
          <Image
            src={item.src}
            width={20}
            height={20}
            alt={item.name}
          />
        </p>

      ))}
    </div>
  </div>
);
