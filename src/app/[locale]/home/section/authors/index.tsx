'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getAuthors } from '@/api/getAuthors';
import { AuthorCard } from '@/components/ui-components/card/card-author';
import { LINK_AUTHOR } from '@/constants/links';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

export const SectionAuthor = () => {
  const [authors, serAuthors] = useState([]);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('pages.home.authors');

  const handleClickToAuthorPage = (id: number) => {
    router.push(`${locale}/${LINK_AUTHOR.path}/${id}`);
  };

  useEffect(() => {
    const getAuthorsData = async () => {
      const data = await getAuthors();
      serAuthors(data.slice(0, 4));
    };

    getAuthorsData();
  }, []);

  return (
    <section className={styles.sectionAuthor}>
      <h2 className={styles.sectionTitle}>{t('sectionTitle')}</h2>
      <div className={styles.cardsAuthors}>
        {authors.map(({
          authorId, src, name, company,
        }) => (
          <AuthorCard
            key={authorId}
            src={src}
            title={name}
            subTitle={company}
            onHandleClick={() => handleClickToAuthorPage(authorId)}
          />
        ))}
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionAuthor);
