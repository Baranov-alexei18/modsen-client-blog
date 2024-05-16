import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';

import styles from './styles.module.scss';

export const Banner = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('pages.home.banner');

  const handleClickToBlogPostPage = () => {
    router.push(`${locale}/blog-post`);
  };

  return (
    <div className={styles.banner}>
      <Image
        src="/image/backgroundBannerHome.png"
        alt="Banner Image"
        fill
        objectFit="cover"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <span className={styles.info}>
            {t('startInfo')}
          </span>
          <h3 className={styles.title}>{t('title')}</h3>
          <p className={styles.subtitle}>By James West  |  May 23, 2022 </p>
          <p className={styles.subtitle}>
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident.
          </p>
          <ButtonApp
            {...YellowButton}
            onClick={handleClickToBlogPostPage}
          >
            {t('btnTitle')}
          </ButtonApp>
        </div>
      </div>
    </div>
  );
};
