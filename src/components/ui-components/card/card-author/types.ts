export type AuthorCardType = {
    authorId: number,
    locale: string,
    src: string,
    title: string,
    subTitle: string,
    name: string,
    company: string,
    social: {
      name: string,
      path: string,
    }[],
    onHandleClick: () => void;
};
