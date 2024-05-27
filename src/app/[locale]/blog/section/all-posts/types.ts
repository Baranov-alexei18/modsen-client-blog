import { PostDataType } from '@/types/post';

export type PostsAllTypes = {
    data: PostDataType[],
    clickNext: () => void,
    clickPrev: () => void,
    disablePrev: boolean,
    disableNext: boolean,
};
