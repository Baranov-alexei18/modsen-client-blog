import Image from 'next/image';

import { Banner } from './home/banner';
import SectionPost from './home/section-posts';

import styles from './styles.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <SectionPost />
    </main>
  );
}
