import { DB, SERVER_URL } from '@/constants';

export const getAuthors = async (id?: string) => {
  try {
    const path = !id ? `${SERVER_URL}${DB.AUTHORS}` : `${SERVER_URL}${DB.AUTHORS}/${id}`;
    const authors = await fetch(path, { cache: 'force-cache' });

    const dataAuthors = await authors.json();

    return dataAuthors;
  } catch (error) {
    console.error(error);
  }
};
