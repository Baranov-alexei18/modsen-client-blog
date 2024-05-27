import { DB, SERVER_URL } from '@/constants';

export const getCategories = async (id?: number) => {
  try {
    const path = !id ? `${SERVER_URL}${DB.CATEGORIES}` : `${SERVER_URL}${DB.CATEGORIES}/${id}`;
    const categories = await fetch(path, { cache: 'force-cache' });

    const data = await categories.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
