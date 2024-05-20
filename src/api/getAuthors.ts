export const getAuthors = async (id?: string) => {
  try {
    const path = !id ? 'http://localhost:3001/authors' : `http://localhost:3001/authors/${id}`;
    const authors = await fetch(path, { cache: 'force-cache' });

    const dataAuthors = await authors.json();

    return dataAuthors;
  } catch (error) {
    console.error(error);
  }
};
