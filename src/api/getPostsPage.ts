import { getAuthorNameById } from '@/helpers/getAuthorName';

import { getAuthors } from './getAuthors';

export const getPostsPage = async (page: number) => {
  try {
    const posts = await fetch(`http://localhost:3001/posts?_page=${page}`);
    const data = await posts.json();
    const authors = await getAuthors();

    const dataWithAuthor = data.data.map((post: { authorId: number; }) => ({
      ...post,
      authorName: getAuthorNameById(post.authorId, authors),
    }));

    return {data: dataWithAuthor, total: data.pages};
  } catch (error) {
    console.error(error);
  }
};
