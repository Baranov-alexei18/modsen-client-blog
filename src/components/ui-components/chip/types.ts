import { ReactNode } from 'react';

export type TagType = {
    className: string,
    children: ReactNode,
    onHandleClick: () => void,
};
