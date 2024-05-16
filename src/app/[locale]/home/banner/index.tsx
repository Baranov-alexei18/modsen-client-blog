import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';

import styles from './styles.module.scss';

export const Banner = () => {
  const router = useRouter();

  const handleClickToBlogPostPage = () => {
    router.push('/blog-post');
  };

  return (
    <div className={styles.banner}>
      <Image
        src="/image/backgroundBannerHome.png"
        alt="Banner Image"
        fill
        objectFit="cover"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <span className={styles.info}>
            POSTED ON
            <b>{' STARTUP'}</b>
          </span>
          <h3 className={styles.title}>Step-by-step guide to choosing great font pairs</h3>
          <p className={styles.subtitle}>By James West  |  May 23, 2022 </p>
          <p className={styles.subtitle}>
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident.
          </p>
          <ButtonApp
            {...YellowButton}
            onClick={handleClickToBlogPostPage}
          >
            {'Read More >'}
          </ButtonApp>
        </div>
      </div>
    </div>
  );
};
