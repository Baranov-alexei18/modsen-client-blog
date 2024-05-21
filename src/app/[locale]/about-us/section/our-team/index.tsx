import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const SectionTeam = () => {
  const t = useTranslations('pages.aboutUs');

  return (
    <section className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.textBlock}>
          <h2>{t('teamCreatives')}</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src="/image/png/image-team1.png"
            alt="Team"
            width={500}
            height={500}
            className={styles.image}
          />
          <div className={styles.decorationYellow} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.imageBlock}>
          <Image
            src="/image/png/image-team2.png"
            alt="Team"
            width={500}
            height={500}
            className={styles.image}
          />
          <div className={styles.decorationPurple} />
        </div>
        <div className={styles.textBlock}>
          <h2>{t('whyStarted')}</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat.
          </p>
        </div>
      </div>
    </section>
  );
};
