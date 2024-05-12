import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ButtonApp } from '@/components/ui-components/button';

import styles from './styles.module.scss';

const SectionPost = () => {
  const router = useRouter();

  const handleClickToBlogPostPage = () => {
    router.push('/blog-post');
  };
  return (
    <section className={styles.sectionPost}>
      <div className={styles.featuredPostWrapper}>
        <h1 className={styles.sectionName}>Featured Post</h1>
        <div className={styles.postCard}>
          <div className={styles.image}>
            <Image
              src="/image/image-post.png"
              alt="Post Image"
              fill
              objectFit="cover"
            />
          </div>
          <p className={styles.infoPost}>By John Doe   l   May 23, 2022</p>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>
            <p className={styles.subtitle}>
              Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <ButtonApp
              backgroundColor="var(--color-yellow)"
              onClick={handleClickToBlogPostPage}
            >
              {'Read More >'}
            </ButtonApp>
          </div>
        </div>
      </div>
      <div className={styles.allPostWrapper}>
        <div className={styles.headerAllPost}>
          <h1 className={styles.sectionName}>All Posts</h1>
          <Link href="/blog">View All</Link>
        </div>

        <div className={styles.authorCard}>
          <div className={styles.authorInfo}>
            <p>By John Deo   |   Aug 23, 2021 </p>
          </div>
          <h3 className={styles.cardTitle}>
            8 Figma design systems that you can download for free today.
          </h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.authorInfo}>
            <p>By John Deo   |   Aug 23, 2021 </p>
          </div>
          <h3 className={styles.cardTitle}>
            8 Figma design systems that you can download for free today.
          </h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.authorInfo}>
            <p>By John Deo   |   Aug 23, 2021 </p>
          </div>
          <h3 className={styles.cardTitle}>
            8 Figma design systems that you can download for free today.
          </h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.authorInfo}>
            <p>By John Deo   |   Aug 23, 2021 </p>
          </div>
          <h3 className={styles.cardTitle}>
            8 Figma design systems that you can download for free today.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionPost;
