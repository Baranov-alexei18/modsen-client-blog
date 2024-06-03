import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { PostCard } from '@/components/Cards/card-blog-post';
import { LINK_BLOG_POST } from '@/constants/links';
import { PostDataType } from '@/types/post';

import styles from './styles.module.scss';

export const SectionAuthorPosts = ({ data }: {data: PostDataType[]}) => {
  const t = useTranslations('pages.home.posts');
  const locale = useLocale();

  return (
    <div className={styles.wrapper}>
      <h1>{t('myPosts')}</h1>
      <div className={styles.postsList}>
        {data.map((post) => (
          <Link href={`/${locale}/${LINK_BLOG_POST}/${post.id}`} key={post.id}>
            <PostCard
              data={post}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
