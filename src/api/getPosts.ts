import { getAuthorName } from '@/helpers/getAuthorName';

import { getAuthors } from './getAuthors';

export const getPosts = async () => {
  try {
    const posts = await fetch('http://localhost:3001/posts');
    const data = await posts.json();

    const authors = await getAuthors();

    const dataWithAuthor = data.map((post: { authorId: number; }) => ({
      ...post,
      authorName: getAuthorName(post.authorId, authors),
    }));

    return dataWithAuthor;
  } catch (error) {
    console.error(error);
  }
};
