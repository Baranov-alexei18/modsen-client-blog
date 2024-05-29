import { DB, SERVER_URL } from '@/constants';

import { getAuthors } from './getAuthors';
import { getCategories } from './getCategories';

export const getOwnPost = async (id: string) => {
  try {
    const posts = await fetch(`${SERVER_URL}${DB.POSTS}/${id}`);
    const data = await posts.json();

    const author = await getAuthors(data.authorId);
    const category = await getCategories(data.categoryId);

    const dataWithAuthorAndCategory = {
      ...data,
      author,
      category,
    };

    return dataWithAuthorAndCategory;
  } catch (error) {
    console.error(error);
  }
};
