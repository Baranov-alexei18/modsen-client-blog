import { useRouter } from 'next/navigation';

import { AuthorCard } from '@/components/ui-components/card/card-author';
import { authors } from '@/constants/serverData';

import styles from './styles.module.scss';

export const SectionAuthor = () => {
  const router = useRouter();

  const handleClickToAuthorPage = () => {
    router.push('/author');
  };

  return (
    <section className={styles.sectionAuthor}>
      <h2 className={styles.sectionTitle}>List of Authors</h2>
      <div className={styles.categoryContainer}>
        {authors.map(({ src, title, subtitle }) => (
          <AuthorCard
            key={src}
            src={src}
            title={title}
            subTitle={subtitle}
            onHandleClick={handleClickToAuthorPage}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionAuthor;
