import { DB, SERVER_URL } from '@/constants';

export const getReviews = async () => {
  try {
    const data = await fetch(`${SERVER_URL}${DB.REVIEWS}`);

    const reviews = await data.json();

    return reviews;
  } catch (error) {
    console.error(error);
  }
};
