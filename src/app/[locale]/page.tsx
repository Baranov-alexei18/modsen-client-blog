'use client';

import dynamic from 'next/dynamic';

import { JoinForm } from '@/components/Forms/JoinForm';

import { Banner } from './home/banner';

import styles from './styles.module.scss';

const SectionPost = dynamic(() => import('./home/section/posts'));
const SectionAboutUs = dynamic(() => import('./home/section/about-us'));
const SectionAuthor = dynamic(() => import('./home/section/authors'));
const SectionCategory = dynamic(() => import('./home/section/category'));
const SectionStarted = dynamic(() => import('./home/section/started'));
const SectionTestimonial = dynamic(() => import('./home/section/testimonials'));

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
