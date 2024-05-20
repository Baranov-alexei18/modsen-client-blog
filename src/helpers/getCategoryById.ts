export const getCategoryById = (categoryId: number, categories: any) => {
  const category = categories.find((category:
    { id: string; }) => parseInt(category.id, 10) === categoryId);
  return category ? category.title : 'Unknown Category';
};
