import { ReactNode } from 'react';

export type SelectType = {
    cyId: string;
    onChange: (e: { target: { value: string; }; }) => void;
    onBlur: (e: unknown) => void;
    name: string;
    value: string;
    children: ReactNode;
  }
