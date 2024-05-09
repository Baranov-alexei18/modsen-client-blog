'use client';

import { useState } from 'react';
import Link from 'next/link';

import { LINKS_HEADER } from '@/constants/links';

import { ButtonApp } from '../ui-components/button';

import styles from './styles.module.scss';

export const Header = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Modsen Client Blog</div>

      <div className={styles.actions}>
        {LINKS_HEADER.map(({ path, name }) => <Link key={`${path}-${name}`} href={path}>{name}</Link>)}
        <ButtonApp>Video about us</ButtonApp>
      </div>
    </header>
  );
};
