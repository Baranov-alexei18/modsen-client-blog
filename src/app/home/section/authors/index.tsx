'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { AuthorCard } from '@/components/ui-components/card/card-author';

import styles from './styles.module.scss';

export const SectionAuthor = () => {
  const [authors, serAuthors] = useState([]);
  const router = useRouter();

  const handleClickToAuthorPage = () => {
    router.push('/author');
  };

  useEffect(() => {
    fetch('http://localhost:3001/authors')
      .then((response) => response.json())
      .then((data) => serAuthors(data.slice(0, 4)));
  }, []);

  return (
    <section className={styles.sectionAuthor}>
      <h2 className={styles.sectionTitle}>List of Authors</h2>
      <div className={styles.categoryContainer}>
        {authors.map(({
          authorId, src, name, company,
        }) => (
          <AuthorCard
            key={authorId}
            src={src}
            title={name}
            subTitle={company}
            onHandleClick={handleClickToAuthorPage}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionAuthor;
