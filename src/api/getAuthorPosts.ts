import { getCategoryById } from '@/helpers/getCategoryById';
import { PostDataType } from '@/types/post';

import { getCategories } from './getCategories';

export const getAuthorPosts = async (id: string) => {
  try {
    const posts = await fetch('http://localhost:3001/posts');
    const data = await posts.json();

    const categories = await getCategories(data.categoryId);

    const filteredData = data.filter(({ authorId }:PostDataType) => authorId === parseInt(id, 10));

    const authorPosts = filteredData.map((item:PostDataType) => ({
      ...item,
      categoryTitle: getCategoryById(item.categoryId, categories),
    }));

    return authorPosts;
  } catch (error) {
    console.error(error);
  }
};
