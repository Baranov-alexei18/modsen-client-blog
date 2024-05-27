export const formatDate = (date: string) => {
  if (!date) return '';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [year, month, day] = date.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const monthAbbreviation = months[monthIndex];

  return `${monthAbbreviation} ${parseInt(day, 10)}, ${year}`;
};
