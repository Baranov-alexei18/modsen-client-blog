import dynamic from 'next/dynamic';
import { unstable_setRequestLocale } from 'next-intl/server';

import { JoinForm } from '@/components/Forms/JoinForm';

import { Banner } from './home/banner';

const SectionPost = dynamic(() => import('./home/section/posts'));
const SectionAboutUs = dynamic(() => import('./home/section/about-us'));
const SectionAuthor = dynamic(() => import('./home/section/authors'));
const SectionCategory = dynamic(() => import('./home/section/category'));
const SectionStarted = dynamic(() => import('./home/section/started'));
const SectionTestimonial = dynamic(() => import('./home/section/testimonials'));

export default function IndexPage({ params: { locale } }: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <Banner />
      <SectionPost />
      <SectionAboutUs />
      <SectionCategory />
      <SectionStarted />
      <SectionAuthor />
      <SectionTestimonial />
      <JoinForm />
    </div>
  );
}
