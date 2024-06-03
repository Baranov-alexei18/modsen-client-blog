'use client';

import { useCallback, useState } from 'react';
import { ButtonApp, SelectApp } from '@alexeika/client-blog-ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { LINKS_HEADER } from '@/constants/links';

import { Sidebar } from '../Sidebar';
import { VideoModal } from '../VideoModal';

import styles from './styles.module.scss';

export const Header = () => {
  const t = useTranslations('header');
  const router = useRouter();
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChange = (e: { target: { value: string; }; }) => {
    const { value } = e.target;

    const currentPath = window.location.href;

    const newUrl = currentPath.replace(`/${locale}`, `/${value}/`);

    router.push(newUrl);

    router.refresh();
  };

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
          <SelectApp
            cyId="select-language-main"
            onChange={handleChange}
            value={locale}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </SelectApp>
        </div>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          ☰
        </button>
      </header>
      {isModalOpen && <VideoModal isOpen={isModalOpen} onClose={closeModal} />}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} links={LINKS_HEADER} />
    </>
  );
};
