export const getCategories = async (id?: number) => {
  try {
    const path = !id ? 'http://localhost:3001/categories' : `http://localhost:3001/categories/${id}`;
    const categories = await fetch(path, { cache: 'force-cache' });

    const data = await categories.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
