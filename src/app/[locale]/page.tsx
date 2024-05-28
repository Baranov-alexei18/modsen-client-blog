'use client';

import dynamic from 'next/dynamic';

import { JoinForm } from '@/components/Forms/JoinForm';

import { Banner } from './home/banner';

import styles from './styles.module.scss';

const SectionPost = dynamic(() => import('./home/section/posts'), {
  ssr: false,
});
const SectionAboutUs = dynamic(() => import('./home/section/about-us'), {
  ssr: false,
});
const SectionAuthor = dynamic(() => import('./home/section/authors'), {
  ssr: false,
});
const SectionCategory = dynamic(() => import('./home/section/category'), {
  ssr: false,
});
const SectionStarted = dynamic(() => import('./home/section/started'), {
  ssr: false,
});
const SectionTestimonial = dynamic(() => import('./home/section/testimonials'), {
  ssr: false,
});

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
