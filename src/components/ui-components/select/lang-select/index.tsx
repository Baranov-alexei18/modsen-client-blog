'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import styles from './styles.module.scss';

export default function SelectLanguage() {
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (e: { target: { value: string; }; }) => {
    const { value } = e.target;

    const currentPath = window.location.href;

    const newUrl = currentPath.replace(`/${locale}`, `/${value}/`);

    router.replace(newUrl);
  };

  return (
    <select
      className={styles.wrapper}
      defaultValue={locale}
      onChange={handleChange}
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
}
