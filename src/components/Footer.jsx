import "../css/Footer.css";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";

export default function Footer() {
    // ----- CONTEXTS -----
    const { darkMode } = useContext(DarkModeContext);

    // ----- RENDER -----
    return(
        <div className={`footer ${darkMode ? "dark" : ""}`}>
            <p>© {new Date().getFullYear()} Kieran Gough Portfolio. All rights reserved.</p>
        </div>
    )
}