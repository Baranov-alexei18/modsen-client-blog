import { DB, SERVER_URL } from '@/constants';

import { getPostWithAuthorAndCategory } from './getPostWithAuthorAndCategory';

export const getPosts = async (query?:string) => {
  try {
    const queryPosts = query ? `?${query}` : '';

    const posts = await fetch(`${SERVER_URL}${DB.POSTS}${queryPosts}`);
    const postsData = await posts.json();

    const data = await getPostWithAuthorAndCategory(postsData);

    return data;
  } catch (error) {
    console.error(error);
  }
};
