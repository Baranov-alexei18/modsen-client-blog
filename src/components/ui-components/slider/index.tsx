'use client';

// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

const reviewsData = [
  {
    id: 1,
    author: 'John Doe',
    city: 'New york, USA',
    image: '/image/png/person1.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero nec elit tincidunt venenatis. Sed a vestibulum tortor.',
  },
  {
    id: 2,
    author: 'Jane Mile',
    city: 'Minsk, Belarus',
    image: '/image/png/person2.png',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu feugiat ex.',
  },
  {
    id: 3,
    author: 'Alex Bred',
    city: 'Berlin, Germany',
    image: '/image/png/person3.png',
    content: 'Oops, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu feugiat ex.',
  },
];

export const Slider = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handlePrev = () => {
    setCurrentReviewIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReviewIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.review}>
        <p className={styles.content}>{reviewsData[currentReviewIndex].content}</p>
      </div>
      <div className={styles.sliderFooter}>
        <div className={styles.author}>
          <Image width="48" height="48" src={reviewsData[currentReviewIndex].image} alt="person-icon" />
          <div>
            <p className={styles.title}>{reviewsData[currentReviewIndex].author}</p>
            <p className={styles.subtitle}>{reviewsData[currentReviewIndex].city}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.button} onClick={handlePrev}>
            <Image width="24" height="24" src="/image/svg/arrow-left.svg" alt="prev" />
          </button>
          <button type="button" className={styles.button} onClick={handleNext}>
            <Image width="24" height="24" src="/image/svg/arrow-right.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
