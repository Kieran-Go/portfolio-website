import "../css/Header.css";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";
import capitalizeString from "../utility/capitalizeString";
import scrollTo from "../utility/scrollTo";
import { sun, moon } from "../utility/images";

export default function Header() {
    // ----- CONTEXTS -----
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    // ----- FUNCTIONS -----
    // Toggles dark mode and sets it in local storage
    const toggleDarkMode = () => {
    setDarkMode(prev => {
        const newMode = !prev;
        localStorage.setItem("darkMode", newMode);
        return newMode;
    });
}

    // Nav components array
    const nav = ["home", "about", "projects", "contact"];

    // ----- RENDER -----
    return(
        // Main div container for header ui
        <div className={`header ${darkMode ? "dark" : ""}`}>

            {/* Iterate through nav array to render all nav options */}
            <div className="nav">
                {nav.map((n) => {
                    return(
                        <p key={n} onClick={() => scrollTo(n)}>
                            {capitalizeString(n)}
                        </p>
                    )
                })}
            </div>

            {/* Dark mode sun/moon image */}
            <img 
                src={darkMode ? moon : sun} 
                alt={darkMode ? "Moon icon" : "Sun icon"} 
                onClick={() => toggleDarkMode()}
            />
        </div>
    )
}