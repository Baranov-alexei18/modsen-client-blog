import Image from 'next/image';
import Link from 'next/link';

import { ButtonApp } from '@/components/ui-components/button';
import { withVisibilityObserver } from '@/hocs/withVisibilityObserver';

import styles from './styles.module.scss';

const SectionAboutUs = () => (
  <section className={styles.sectionAboutUs}>
    <div className={styles.colorBar} />
    <div className={styles.AboutUsWrapper}>
      <div className={styles.InfoWrapper}>
        <h2>ABOUT US</h2>
        <p className={styles.title}>
          We are a community of content writers who share their learnings
        </p>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href="/about-us">{'Read More >'}</Link>
      </div>
      <div className={styles.InfoWrapper}>
        <h2>OUR MISION</h2>
        <p className={styles.secondTitle}>
          Creating valuable content for creatives all around the world
        </p>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </section>
);

export default withVisibilityObserver(SectionAboutUs);
