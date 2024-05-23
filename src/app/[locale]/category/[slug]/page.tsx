import { useTranslations } from 'next-intl';

import { HeaderCategory } from '../section/header';
import { ListPosts } from '../section/posts';

import styles from '../styles.module.scss';

export default function Category({ params }: { params: { slug: string } }) {
  // const t = useTranslations('pages.privacyPolice');

  return (
    <main className={styles.wrapper}>
      <HeaderCategory slug={params.slug} />
      <ListPosts slug={params.slug} />
    </main>
  );
}
