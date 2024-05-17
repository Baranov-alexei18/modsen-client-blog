export const getAuthorNameById = (authorId:number, authors: any) => {
  const author = authors.find((author: { authorId: number; }) => author.authorId === authorId);
  return author ? author.name : 'Unknown Author';
};
