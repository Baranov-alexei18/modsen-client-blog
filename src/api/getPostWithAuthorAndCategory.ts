import { getAuthorName } from '@/helpers/getAuthorName';
import { getCategoryById } from '@/helpers/getCategoryById';
import { PostDataType } from '@/types/post';

import { getAuthors } from './getAuthors';
import { getCategories } from './getCategories';

export const getPostWithAuthorAndCategory = async (data: PostDataType[]) => {
  const authors = await getAuthors();
  const categories = await getCategories();

  const post = data.map((post: PostDataType) => ({
    ...post,
    authorName: getAuthorName(post.authorId, authors),
    categoryTitle: getCategoryById(post.categoryId, categories),
  }));

  return post;
};
