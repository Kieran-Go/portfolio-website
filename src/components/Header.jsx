import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";
import capitalizeString from "../utility/capitalizeString";
import { sun, moon } from "../utility/images";

export default function Header() {
    // ----- CONTEXTS -----
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    // ----- FUNCTIONS -----
    // Scrolls smoothly to specified document section
    const scrollTo = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Nav components array
    const nav = ["home", "about", "projects", "contact"];

    // ----- RENDER -----
    return(
        // Main div container for header ui
        <div className="header">

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
                onClick={() => setDarkMode(!darkMode)}
            />
        </div>
    )
}