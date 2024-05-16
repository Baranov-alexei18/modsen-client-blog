'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function SelectLanguage() {
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (e: { target: { value: string; }; }) => {
    const { value } = e.target;

    const currentPath = window.location.href;

    const newUrl = currentPath.replace(`/${locale}`, `/${value}/`); // Заменяем текущую локаль на выбранную

    router.replace(newUrl);
  };

  return (
    <select defaultValue={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
}
