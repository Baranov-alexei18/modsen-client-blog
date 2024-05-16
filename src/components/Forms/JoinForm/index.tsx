import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';

import styles from './styles.module.scss';

export const JoinForm = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('forms.join');

  const handleClickToContactPage = () => {
    router.push(`${locale}/contact`);
  };

  return (
    <section className={styles.sectionJoinForm}>
      <h3 className={styles.title}>
        {t('title')}
      </h3>
      <p className={styles.subtitle}>
        {t('subtitle')}
      </p>
      <ButtonApp
        {...YellowButton}
        onClick={handleClickToContactPage}
      >
        {t('btnTitle')}
      </ButtonApp>
    </section>
  );
};
