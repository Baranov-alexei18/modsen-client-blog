import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { AuthorCardType } from '@/components/ui-components/card/card-author/types';
import { SocialGroups } from '@/components/ui-components/socialGroups';

import styles from './styles.module.scss';

export const SectionAuthorMeta = ({ data }: { data: AuthorCardType }) => {
  const t = useTranslations('pages.home.authors');

  const { src, name, social } = data!;

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.image}>
            <Image
              src={src!}
              alt="Avatar"
              fill
            />
          </div>
          <div className={styles.userMeta}>
            <h2 className={styles.title}>
              {t('title', { name })}
            </h2>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Non blandit massa enim nec. Scelerisque viverra
              mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
            {social.length && <SocialGroups data={social} />}
          </div>
        </div>
        <div className={styles.colorBar} />
      </div>
    </section>
  );
};
