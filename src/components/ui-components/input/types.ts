export type InputType = {
    cyId: string,
    type: string,
    name: string
    value: string,
    placeholder: string,
    isTouch: boolean,
    error: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void,
};
