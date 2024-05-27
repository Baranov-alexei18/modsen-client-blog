export const getCategoryById = (categoryId: number, categories: {
  id: string,
  title: string,
  subtitle: string,
  src: string
}[]) => {
  const category = categories.find((category) => parseInt(category.id, 10) === categoryId);
  return category ? category.title : 'Unknown Category';
};
