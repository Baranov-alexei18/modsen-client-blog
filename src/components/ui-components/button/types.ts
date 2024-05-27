import { ReactNode } from 'react';

export type ButtonType = {
    cyId: string,
    type: 'button' | 'submit' | 'reset',
    children: ReactNode,
    backgroundColor: string,
    onClick: () => void;
    disabled: boolean;
};
