import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { PostCard } from '@/components/ui-components/card/card-post';
import { formatDate } from '@/helpers/formatDate';
import { getAuthorNameById } from '@/helpers/getAuthorName';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

const SectionPost = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState({
    title: 'Exemple',
    subtitle: 'Subtitle exemple',
    date_created: '2022-05-01',
    src: '/image/image-post.png',
    authorName: 'Jhon Doe',
  });

  const t = useTranslations('pages.home.posts');
  const router = useRouter();
  const locale = useLocale();

  const {
    src, title, subtitle, date_created, authorName,
  } = featuredPost!;

  const handleClickToBlogPostPage = () => {
    router.push(`${locale}/blog-post`);
  };

  useEffect(() => {
    // Запрос на пагинацию
    // const response = fetch('http://localhost:3001/posts?_page=2')
    const getPost = async () => {
      const posts = await fetch('http://localhost:3001/posts?_page=1');
      const authors = await fetch('http://localhost:3001/authors');

      const { data } = await posts.json();
      const dataAuthors = await authors.json();

      const dataWithAuthor = data.map((post: { authorId: number; }) => ({
        ...post,
        authorName: getAuthorNameById(post.authorId, dataAuthors),
      }));
      setPosts(dataWithAuthor.slice(1, 5));
      setFeaturedPost(dataWithAuthor[0]);
    };
    getPost();
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
          <p className={styles.infoPost}>{`By ${authorName} | ${formatDate(date_created)}`}</p>
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
          {posts.map(({ title, date_created, authorName }) => (
            <PostCard
              key={`${title}-${date_created}`}
              name={authorName}
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
