export const getAuthors = async () => {
  try {
    const authors = await fetch('http://localhost:3001/authors', { cache: 'force-cache' });

    const dataAuthors = await authors.json();

    return dataAuthors;
  } catch (error) {
    console.error(error);
  }
};
