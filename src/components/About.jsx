import "../css/About.css"
import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";
import { about } from "../data";

export default function About() {
    // ----- CONTEXTS -----
    const { darkMode } = useContext(DarkModeContext);

    // ----- RENDER -----
    return(
        <div id="about" className={`about ${darkMode ? "dark" : ""}`}>
            {/* Render title */}
            <h1 className="title">About</h1>
            <div className="title-underline"></div>

            {/* Render description */}
            <div className="description">
                {about.description.map((d) => {
                    return <p>{d}</p>
                })}
            </div>

            {/* Render list of skills */}
            <h3>Skills and Tools</h3>
            <div className="skills-grid">
                {about.skills.map((s) => {
                    return(
                        <p className="skill">{s}</p>
                    )
                })}
            </div>
        </div>
    )
}