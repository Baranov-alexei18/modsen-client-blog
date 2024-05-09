/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LINKS_FOOTER, SOCIAL_NETWORK_LINKS } from '@/constants/links';

import { SubscribeForm } from '../Forms/SubscribeForm';

import styles from './styles.module.scss';

export const Footer = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.logo}>Modsen Client Blog</div>
        <div className={styles.actions}>
          {LINKS_FOOTER.map(({ path, name }) => <Link key={`${path}-${name}`} href={path}>{name}</Link>)}
        </div>
      </div>
      <div />
      <SubscribeForm />
      <div className={styles.row}>
        <div className={styles.info}>
          Finstreet 118 2561 Fintown
          <br />
          Hello@finsweet.com  020 7993 2905
        </div>
        <div className={styles.icons}>
          {SOCIAL_NETWORK_LINKS.map(({ src, name, path }) => (
            <Link
              key={name}
              href={path}
            >
              <Image
                src={src}
                width={20}
                height={20}
                alt={name}
              />
            </Link>

          ))}
        </div>
      </div>
    </footer>
  );
};
