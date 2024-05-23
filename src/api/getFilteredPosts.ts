import { PostDataType } from '@/types/post';

import { getPosts } from './getPosts';

export const getFilteredPosts = async (
  categoryId: string | null = null,
  tags: string[] | null = null,
) => {
  try {
    let posts = await getPosts();
    console.log(posts);
    if (categoryId) {
      posts = posts.filter((item: PostDataType) => item.categoryId.toString() === categoryId);
    }
    if (tags?.length) {
      posts = posts.filter(
        (item: PostDataType) => item.tags.some((tag: string) => tags.includes(tag)),
      );
    }
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
};
