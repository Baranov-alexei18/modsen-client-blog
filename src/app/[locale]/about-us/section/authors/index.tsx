import Link from 'next/link';
import { useLocale } from 'next-intl';

import { getAuthors } from '@/api/getAuthors';
import { AuthorCard } from '@/components/ui-components/card/card-author';
import { AuthorCardType } from '@/components/ui-components/card/card-author/types';
import { LINK_AUTHOR } from '@/constants/links';

import styles from './styles.module.scss';

export const SectionAuthor = async () => {
  const authors = await getAuthors();
  const locale = useLocale();

  return (
    <section className={styles.sectionAuthor}>
      <h2 className={styles.sectionTitle}>List authors</h2>
      <div className={styles.cardsAuthors}>
        {authors.length && authors.map(({
          authorId, src, name, company, social,
        }: AuthorCardType) => (
          <Link key={authorId} href={`/${locale}/${LINK_AUTHOR.path}/${authorId}`}>
            <AuthorCard
              src={src}
              title={name}
              subTitle={company}
              social={social}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
