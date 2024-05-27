import { getPosts } from './getPosts';
import { getPostWithAuthorAndCategory } from './getPostWithAuthorAndCategory';

export const getPostsPage = async (page: number) => {
  try {
    const posts = await getPosts(`_page=${page}`);
    const postsData = await getPostWithAuthorAndCategory(posts.data);

    return { data: postsData, total: posts.pages };
  } catch (error) {
    console.error(error);
  }
};
