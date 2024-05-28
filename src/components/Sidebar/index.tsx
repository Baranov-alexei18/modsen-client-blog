import React, { useCallback, useState } from 'react';
import { ButtonApp, SelectApp } from '@alexeika/client-blog-ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { VideoModal } from '../VideoModal';

import { SidebarType } from './types';

import styles from './styles.module.scss';

export const Sidebar = ({ isOpen, onClose, links }: SidebarType) => {
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {links.map(({ path, name }) => (
          <Link key={`${path}-${name}`} href={`/${locale}/${path}`} onClick={onClose}>
            {t(`${name}`)}
          </Link>
        ))}
        <ButtonApp onClick={openModal}>{t('btnModalTitle')}</ButtonApp>
        <SelectApp
          cyId="select-language-mobile"
          onChange={handleChange}
          value={locale}
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </SelectApp>
      </div>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
