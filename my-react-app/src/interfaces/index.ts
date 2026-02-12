export interface InputComponentProps {
    value: string;
    onSubmit: (val: string) => void;
}

export interface MessageComponentProps {
    promise: Promise<string>;
}
