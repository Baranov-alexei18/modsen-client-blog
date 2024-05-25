'use client';

import { useEffect, useState } from 'react';

import { getPostsPage } from '@/api/getPostsPage';
import { JoinForm } from '@/components/Forms/JoinForm';

import { SectionCategory } from '../home/section/category';

import { SectionPosts } from './section/all-posts';
import { SectionFeaturedPost } from './section/features-post';

import styles from '../styles.module.scss';

const MIN_PAGE = 1;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getPost = async () => {
      const posts = await getPostsPage(page);
      setTotalPages(posts?.total);
      setPosts(posts?.data);

      if (!featuredPost) {
        setFeaturedPost(posts?.data[0]);
      }
    };
    getPost();
  }, [featuredPost, page]);

  const getNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getPrevPage = () => {
    setPage((prev) => Math.max(prev - 1, MIN_PAGE));
  };

  return (
    <main className={styles.main}>
      {featuredPost && <SectionFeaturedPost data={featuredPost} />}
      <SectionPosts
        data={posts}
        clickNext={getNextPage}
        clickPrev={getPrevPage}
        disablePrev={page === MIN_PAGE}
        disableNext={page === totalPages}
      />
      <SectionCategory />
      <JoinForm />
    </main>
  );
}
