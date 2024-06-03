import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getOwnPost } from '@/api/getOwnPost';
import { getPosts } from '@/api/getPosts';
import { ArticlePostCard } from '@/components/Cards/card-article-post';
import { JoinForm } from '@/components/Forms/JoinForm';
import { LINK_BLOG_POST } from '@/constants/links';
import { formatDate } from '@/helpers/formatDate';
import { PostDataType } from '@/types/post';

import styles from './styles.module.scss';

export default async function PagePost({ params }: { params: { locale: string, slug: string } }) {
  const postData = await getOwnPost(params.slug);

  const getNextPostsCategory = async (id: number) => {
    const posts = await getPosts();
    const data = posts!.filter((
      item: PostDataType,
    ) => item.categoryId === id && item.id !== parseFloat(params.slug));
    return data.slice(0, 3);
  };

  const nextPosts = await getNextPostsCategory(postData.categoryId);

  const {
    src, title, subtitle, body, date_created, author, category,
  } = postData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <Image
            src={author.src}
            alt={author.name}
            fill
            className={styles.avatar}
          />
          <div className={styles.info}>
            <p className={styles.name}>
              <span>{author.name}</span>
            </p>
            <p>
              {`Posted on ${formatDate(date_created)}`}
            </p>
          </div>
        </div>
        <h1>{title}</h1>
        <div className={styles.category}>
          <Image src={category.src} alt={category.title} fill className={styles.categoryImage} />
          {category.title}
        </div>
      </div>
      <div className={styles.image}>
        <Image src={src} alt={category.title} fill />
      </div>
      <div className={styles.content}>
        <h3>{subtitle}</h3>
        <p>{body}</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.sectionNext}>
          {!!nextPosts.length && (
            <>
              <h1>What to read next</h1>
              <div className={styles.wrapperNextPosts}>
                {nextPosts.map((post: PostDataType) => (
                  <Link className={styles.postCard} href={`/${params.locale}/${LINK_BLOG_POST}/${post.id}`} key={post.id}>
                    <ArticlePostCard
                      data={post}
                    />
                  </Link>
                ))}
              </div>
            </>
          )}

        </div>
      </Suspense>
      <JoinForm />
    </div>
  );
}
