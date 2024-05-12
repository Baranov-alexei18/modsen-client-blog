import Image from 'next/image';

import { JoinForm } from '@/components/Forms/JoinForm';

import { Banner } from './home/banner';
import { SectionAboutUs } from './home/section/about-us';
import { SectionAuthor } from './home/section/authors';
import { SectionCategory } from './home/section/category';
import { SectionPost } from './home/section/posts';
import { SectionStarted } from './home/section/started';
import { SectionTestimonial } from './home/section/testimonials';

import styles from './styles.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <SectionPost />
      <SectionAboutUs />
      <SectionCategory />
      <SectionStarted />
      <SectionAuthor />
      <SectionTestimonial />
      <JoinForm />
    </main>
  );
}
