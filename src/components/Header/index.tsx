'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { LINKS_HEADER } from '@/constants/links';

import { Sidebar } from '../Sidebar';
import { ButtonApp } from '../ui-components/button';
import { VideoModal } from '../ui-components/modal/VideoModal';
import SelectLanguage from '../ui-components/select/lang-select';

import styles from './styles.module.scss';

export const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Modsen Client Blog</div>
        <div className={styles.actions}>
          {LINKS_HEADER.map(({ path, name }) => (
            <Link data-testid={path} key={`${path}-${name}`} href={`/${locale}/${path}`}>
              {t(`${name}`)}
            </Link>
          ))}
          <ButtonApp data-testid="modal-open-button" onClick={openModal}>{t('btnModalTitle')}</ButtonApp>
          <SelectLanguage cyId="select-language-main" />
        </div>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          ☰
        </button>
      </header>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} links={LINKS_HEADER} />
    </>
  );
};
