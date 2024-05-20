export type PostDataType = {
    src: string,
    title: string,
    subtitle: string,
    date_created: string,
    authorName: string,
    authorId: number,
    categoryId: number,
    categoryTitle: string,
    id: number,
    body: string,
};

export type PostDataProps = {
    data: PostDataType,
    handleClickPost?: () => void
}
