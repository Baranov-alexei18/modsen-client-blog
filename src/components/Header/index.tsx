'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { LINKS_HEADER } from '@/constants/links';

import { ButtonApp } from '../ui-components/button';
import { VideoModal } from '../ui-components/modal/VideoModal';
import SelectLanguage from '../ui-components/select/lang-select';

import styles from './styles.module.scss';

export const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Modsen Client Blog </div>
        <div className={styles.actions}>
          {LINKS_HEADER.map(({ path, name }) => <Link key={`${path}-${name}`} href={`/${locale}/${path}`}>{t(`${name}`)}</Link>)}
          <ButtonApp onClick={openModal}>{t('btnModalTitle')}</ButtonApp>
          <SelectLanguage />
        </div>
      </header>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
