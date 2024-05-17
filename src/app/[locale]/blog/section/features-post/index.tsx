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
    // update click button
  };

  const {
    src, title, subtitle, date_created, authorName,
  } = data!;

  return (
    <section className={styles.sectionPost}>
      <div className={styles.featuredPostWrapper}>
        <h1 className={styles.sectionName}>{t('featuredPost').toUpperCase()}</h1>
        <div className={styles.postCard}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p className={styles.infoPost}>{`By ${authorName} | ${formatDate(date_created!)}`}</p>
          <div className={styles.content}>

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
        </div>
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
