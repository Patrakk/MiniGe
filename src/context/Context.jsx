import { createContext, useState } from "react";
import runChat from "../config/gemini";
import { marked } from "marked";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompt, setPreviousPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const parseResponse = (text) => {
        const html = marked(text);
        return html.split(" ");
    };

    const delayDisplay = (words, setResultCallback, delay = 75) => {
        words.forEach((word, i) => {
            setTimeout(() => {
                setResultCallback(prev => prev + word + " ");
            }, i * delay);
        });
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);

        try {
            const response = await runChat(input);

            const words = parseResponse(response);
            delayDisplay(words, setResultData);
        } catch (err) {
            console.error("Error getting response from Gemini:", err);
        } finally {
            setLoading(false);
            setInput("");
        }
    }

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;