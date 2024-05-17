'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { JoinForm } from '@/components/Forms/JoinForm';
import { getAuthorNameById } from '@/helpers/getAuthorName';

import { SectionCategory } from '../home/section/category';

import { SectionPosts } from './section/all-posts';
import { SectionFeaturedPost } from './section/features-post';

import styles from '../styles.module.scss';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Запрос на пагинацию
    // const response = fetch('http://localhost:3001/posts?_page=2')
    const getPost = async () => {
      const posts = await fetch(`http://localhost:3001/posts?_page=${page}`);
      const authors = await fetch('http://localhost:3001/authors');

      const data = await posts.json();
      const dataAuthors = await authors.json();

      setTotalPages(data.pages);

      const dataWithAuthor = data.data.map((post: { authorId: number; }) => ({
        ...post,
        authorName: getAuthorNameById(post.authorId, dataAuthors),
      }));
      setPosts(dataWithAuthor);
      if (!featuredPost) {
        setFeaturedPost(dataWithAuthor[0]);
      }
    };
    getPost();
  }, [featuredPost, page]);

  const getNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getPrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <main className={styles.main}>
      {featuredPost && <SectionFeaturedPost data={featuredPost} />}
      <SectionPosts
        data={posts}
        clickNext={getNextPage}
        clickPrev={getPrevPage}
        disablePrev={page === 1}
        disableNext={page === totalPages}
      />
      <SectionCategory />
      <JoinForm />
    </main>
  );
}
