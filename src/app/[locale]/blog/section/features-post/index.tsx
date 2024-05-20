import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { formatDate } from '@/helpers/formatDate';
import { PostDataProps } from '@/types/post';

import styles from './styles.module.scss';

export const SectionFeaturedPost = ({ data }: PostDataProps) => {
  const t = useTranslations('pages.home.posts');
  const router = useRouter();
  const locale = useLocale();

  const handleClickToBlogPostPage = () => {
    router.push(`/${locale}/blog-post/1`);
  };

  const {
    src, title, subtitle, date_created, authorName,
  } = data!;

  return (
    <section className={styles.wrapper}>
      <div className={styles.featuredPostWrapper}>
        <h3 className={styles.sectionName}>{t('featuredPost').toUpperCase()}</h3>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.infoPost}>
          By
          <span>
            {` ${authorName} `}
          </span>
          |
          {` ${formatDate(date_created!)}`}
        </p>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        <ButtonApp
          {...YellowButton}
          onClick={handleClickToBlogPostPage}
        >
          {t('btnTitle')}
        </ButtonApp>
      </div>
      <div className={styles.image}>
        <Image
          src={src!}
          alt="Post Image"
          fill
        />
      </div>
    </section>
  );
};
