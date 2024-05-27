import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '../ui-components/button';
import { VideoModal } from '../ui-components/modal/VideoModal';
import SelectLanguage from '../ui-components/select/lang-select';

import { SidebarType } from './types';

import styles from './styles.module.scss';

export const Sidebar = ({ isOpen, onClose, links }: SidebarType) => {
  const t = useTranslations('header');
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <SelectLanguage cyId="select-language-mobile" />
      </div>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
