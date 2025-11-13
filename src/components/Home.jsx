import "../css/Home.css"
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";
import scrollTo from "../utility/scrollTo";

export default function Home() {
    // ----- CONTEXTS -----
    const { darkMode } = useContext(DarkModeContext);

    // ----- STATES -----
    const fullText = "Aspiring JS Developer";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    // ----- EFFECTS -----
    // Typing animation effect for sub-heading
    useEffect(() => {
        const typingSpeed = 100; // ms per character
        const pauseBetweenLoops = 1500; // pause time before loop

        if (index < fullText.length) {
            // If there are still letters left to type
            const timeout = setTimeout(() => {
                // Show one more letter
                setDisplayedText(fullText.slice(0, index + 1));

                // Move to next letter for next loop
                setIndex(i => i + 1);
            }, typingSpeed);

            // Cleanup to prevent multiple timers from stacking
            return () => clearTimeout(timeout);
        } 
        else {
            // If the full text is displayed
            const resetTimeout = setTimeout(() => {
                // Clear the text and start typing again
                setDisplayedText("");
                setIndex(0);
            }, pauseBetweenLoops);

            // Cleanup
            return () => clearTimeout(resetTimeout);
        }
    }, [index, fullText]);

    // ----- RENDER -----
    return(
        <div id="home" className={`home ${darkMode ? "dark" : ""}`}>
            <h1>Kieran Gough</h1>
            <h3 className="typing">{displayedText}</h3>
            <p>Building web apps with JavaScript, one line of code at a time.</p>
            <button onClick={() => scrollTo("projects")}>View my Projects</button>
        </div>
    )
}