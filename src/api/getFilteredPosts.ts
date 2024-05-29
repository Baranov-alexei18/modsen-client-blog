import { PostDataType } from '@/types/post';

import { getPosts } from './getPosts';

export const getFilteredPosts = async (
  categoryId: string | null = null,
  tags: string[] | null = null,
) => {
  try {
    let path = '';

    if (categoryId) {
      path = `categoryId=${categoryId}`;
    }

    let posts = await getPosts(path);

    if (tags?.length) {
      posts = posts!.filter(
        (item: PostDataType) => item.tags.some((tag: string) => tags.includes(tag)),
      );
    }

    return posts;
  } catch (error) {
    console.error(error);
  }
};
