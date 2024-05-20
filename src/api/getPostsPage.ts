import { getAuthorName } from '@/helpers/getAuthorName';
import { getCategoryById } from '@/helpers/getCategoryById';

import { getAuthors } from './getAuthors';
import { getCategories } from './getCategories';

export const getPostsPage = async (page: number) => {
  try {
    const posts = await fetch(`http://localhost:3001/posts?_page=${page}`);
    const data = await posts.json();
    const authors = await getAuthors();
    const categories = await getCategories();

    const dataWithAuthor = data.data.map((post: { authorId: number; categoryId: number; }) => ({
      ...post,
      authorName: getAuthorName(post.authorId, authors),
      categoryTitle: getCategoryById(post.categoryId, categories),
    }));

    return { data: dataWithAuthor, total: data.pages };
  } catch (error) {
    console.error(error);
  }
};
