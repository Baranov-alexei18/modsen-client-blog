import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { PostCard } from '@/components/ui-components/card/card-post';
import { formatDate } from '@/helpers/formatDate';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

const SectionPost = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState({
    title: 'Exemple',
    subtitle: 'Subtitle exemple',
    date_created: '2022-05-01',
    src: '/image/image-post.png',
  });

  const t = useTranslations('pages.home.posts');
  const router = useRouter();
  const locale = useLocale();

  const {
    src, title, subtitle, date_created,
  } = featuredPost!;

  const handleClickToBlogPostPage = () => {
    router.push(`${locale}/blog-post`);
  };

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(1, 5));
        setFeaturedPost(data[0]);
      });
  }, []);

  return (
    <section className={styles.sectionPost}>
      <div className={styles.featuredPostWrapper}>
        <h1 className={styles.sectionName}>{t('featuredPost')}</h1>
        <div className={styles.postCard}>
          <div className={styles.image}>
            <Image
              src={src}
              alt="Post Image"
              fill
            />
          </div>
          <p className={styles.infoPost}>{`By Jhon Doe | ${formatDate(date_created)}`}</p>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {title}
            </h2>
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
      <div className={styles.allPostWrapper}>
        <div className={styles.headerAllPost}>
          <h1 className={styles.sectionName}>{t('allPost')}</h1>
          <Link href={`${locale}/blog`} locale={locale}>{t('view')}</Link>
        </div>
        <div className={styles.allPostWrapper}>
          {posts.map(({ title, date_created }) => (
            <PostCard
              key={`${title}-${date_created}`}
              name="Jhon Deo"
              date={date_created}
              title={title}
              onHandleClick={handleClickToBlogPostPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionPost);
