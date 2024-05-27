export const getAuthorName = (authorId: number, authors: {
  authorId: number,
  name: string,
}[]) => {
  const author = authors.find((author: { authorId: number; }) => author.authorId === authorId);
  return author ? author.name : 'Unknown Author';
};
