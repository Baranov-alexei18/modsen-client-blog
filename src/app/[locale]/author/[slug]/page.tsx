import { getAuthors } from '@/api/getAuthors';
import { getPosts } from '@/api/getPosts';

import { SectionAuthorMeta } from '../section/author';
import { SectionAuthorPosts } from '../section/posts';

import styles from '../../styles.module.scss';

export default async function Author({ params }: { params: { slug: string } }) {
  const author = await getAuthors(params.slug);
  const posts = await getPosts(`authorId=${params.slug}`);

  return (
    <main className={styles.main}>
      <SectionAuthorMeta data={author} />
      {posts && <SectionAuthorPosts data={posts} />}
    </main>
  );
}
