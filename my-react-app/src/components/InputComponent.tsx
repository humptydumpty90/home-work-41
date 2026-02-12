import type { InputComponentProps } from "../interfaces";
import { useState } from "react";

export const InputComponent = ({ value, onSubmit }: InputComponentProps) => {
    const [inputValue, setInputValue] = useState(value);
    return (
        <>
            <input
                type="text"
                value={inputValue}
                placeholder="Write something right here"
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={() => onSubmit(inputValue)}>Submit</button>
        </>
    );
};
