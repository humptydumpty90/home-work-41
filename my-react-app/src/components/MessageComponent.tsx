import { use } from "react";

import type { MessageComponentProps } from "../interfaces";

export const fetchData = (value: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`The text "${value}" has been uploaded successfully`);
            } else {
                reject("An error has occurred");
            }
        }, 1000);
    });
};
export const MessageComponent = ({ promise }: MessageComponentProps) => {
    const message = use(promise);
    return <h1>Status: {message}</h1>;
};

export default MessageComponent;
