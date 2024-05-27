import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export type IconType = {
  name: string,
  path: string,
}

export const SocialGroups = ({ data }: {data: IconType[]}) => (
  <div className={styles.icons}>
    {data.map(({ name, path }) => (
      <Link key={name} href={path}>
        <Image
          src={`/image/svg/${name}.svg`}
          width={20}
          height={20}
          alt={name}
        />
      </Link>
    ))}
  </div>
);
