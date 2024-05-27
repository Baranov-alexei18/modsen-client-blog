export type AuthorCardType = {
    authorId: number,
    locale: string,
    src: string,
    title: string,
    subTitle: string,
    name: string,
    company: string,
    social: {
      [net: string]: string,
    }
    onHandleClick: () => void;
};
