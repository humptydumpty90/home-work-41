import { useState } from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import MessageComponent, { fetchData } from "./components/MessageComponent";

import "./App.css";

import { InputComponent } from "./components/InputComponent";

function App() {
    const [promise, setPromise] = useState<Promise<string> | null>(null);
    return (
        <>
            <ErrorBoundary fallback={<h1>Error occurred</h1>}>
                <Suspense fallback={<h1> Loading . . .</h1>}>
                    <InputComponent
                        value=""
                        onSubmit={(val) => setPromise(fetchData(val))}
                    />
                    {promise && <MessageComponent promise={promise} />}
                </Suspense>
            </ErrorBoundary>
        </>
    );
}

export default App;
