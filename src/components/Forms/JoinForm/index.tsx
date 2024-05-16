import { useRouter } from 'next/navigation';

import { ButtonApp } from '@/components/ui-components/button';
import { YellowButton } from '@/components/ui-components/button/options';

import styles from './styles.module.scss';

export const JoinForm = () => {
  const router = useRouter();

  const handleClickToContactPage = () => {
    router.push('/contact');
  };

  return (
    <section className={styles.sectionJoinForm}>
      <p className={styles.title}>
        Join our team to be a part of our story
      </p>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt.
      </p>
      <ButtonApp
        {...YellowButton}
        onClick={handleClickToContactPage}
      >
        Join now
      </ButtonApp>
    </section>
  );
};
