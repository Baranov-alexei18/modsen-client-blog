'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { JoinForm } from '@/components/Forms/JoinForm';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { Banner } from './home/banner';

import styles from './styles.module.scss';

const SectionPost = dynamic(() => import('./home/section/posts'));
const SectionAboutUs = dynamic(() => import('./home/section/about-us'));
const SectionAuthor = dynamic(() => import('./home/section/authors'));
const SectionCategory = dynamic(() => import('./home/section/category'));
const SectionStarted = dynamic(() => import('./home/section/started'));
const SectionTestimonial = dynamic(() => import('./home/section/testimonials'));

export default function Home() {
  const [isVisiblePost, refPost] = useIntersectionObserver();
  const [isVisibleAboutUs, refAboutUs] = useIntersectionObserver();
  const [isVisibleCategory, refCategory] = useIntersectionObserver();
  const [isVisibleStarted, refStarted] = useIntersectionObserver();
  const [isVisibleAuthor, refAuthor] = useIntersectionObserver();
  const [isVisibleTestimonial, refTestimonial] = useIntersectionObserver();

  const [postVisible, setPostVisible] = useState(false);
  const [aboutUsVisible, setAboutUsVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [startedVisible, setStartedVisible] = useState(false);
  const [authorVisible, setAuthorVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);

  useEffect(() => {
    if (isVisiblePost) setPostVisible(true);
    if (isVisibleAboutUs) setAboutUsVisible(true);
    if (isVisibleCategory) setCategoryVisible(true);
    if (isVisibleStarted) setStartedVisible(true);
    if (isVisibleAuthor) setAuthorVisible(true);
    if (isVisibleTestimonial) setTestimonialVisible(true);
  }, [isVisiblePost,
    isVisibleAboutUs,
    isVisibleCategory,
    isVisibleStarted,
    isVisibleAuthor,
    isVisibleTestimonial]);

  return (
    <main className={styles.main}>
      <Banner />
      <div className={`${styles.section} ${postVisible ? styles.visible : ''}`} ref={refPost}>
        <SectionPost />
      </div>
      <div className={`${styles.section} ${aboutUsVisible ? styles.visible : ''}`} ref={refAboutUs}>
        <SectionAboutUs />
      </div>
      <div className={`${styles.section} ${categoryVisible ? styles.visible : ''}`} ref={refCategory}>
        <SectionCategory />
      </div>
      <div className={`${styles.section} ${startedVisible ? styles.visible : ''}`} ref={refStarted} style={{ width: '100%' }}>
        <SectionStarted />
      </div>
      <div className={`${styles.section} ${authorVisible ? styles.visible : ''}`} ref={refAuthor}>
        <SectionAuthor />
      </div>
      <div className={`${styles.section} ${testimonialVisible ? styles.visible : ''}`} ref={refTestimonial}>
        <SectionTestimonial />
        <JoinForm />
      </div>
    </main>
  );
}
