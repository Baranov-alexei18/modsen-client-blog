import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';
import { LINK_ABOUT_US } from '@/constants/links';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

const SectionStarted = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('pages.home.started');

  const handleClickToAboutUsPage = () => {
    router.push(`${locale}/${LINK_ABOUT_US.path}`);
  };

  return (
    <section className={styles.sectionStarted}>
      <div className={styles.imageContainer}>
        <Image
          src="/image/png/peopleOnBeach.png"
          alt="Image why started"
          fill
          objectFit="cover"
        />
        <div className={styles.overlayWrapper}>
          <h4>
            {t('sectionTitle')}
          </h4>
          <p className={styles.title}>
            {t('title')}
          </p>
          <p className={styles.subtitle}>
            {t('subtitle')}
          </p>
          <ButtonApp
            {...YellowButton}
            onClick={handleClickToAboutUsPage}
          >
            {t('btnTitle')}
          </ButtonApp>
        </div>
      </div>
    </section>
  );
};

export default withVisibilityObserver(SectionStarted);
