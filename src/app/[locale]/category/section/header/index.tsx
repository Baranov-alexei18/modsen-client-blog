import { useTranslations } from 'next-intl';

import { getCategories } from '@/api/getCategories';

import styles from './styles.module.scss';

export const HeaderCategory = async ({ slug }: {slug: string}) => {
  const { title } = await getCategories(parseInt(slug, 10));

  return (
    <div className={styles.wrapper}>
      <h1>
        {title}
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <h5>
        {`Blog > ${title}`}
      </h5>
    </div>
  );
};
