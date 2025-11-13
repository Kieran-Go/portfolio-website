import "../css/Projects.css"
import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";
import { projects } from "../data";

export default function Projects() {
    // ----- CONTEXTS -----
    const { darkMode } = useContext(DarkModeContext);

    // ----- RENDER -----
    return(
        <div id="projects" className={`projects ${darkMode ? "dark" : ""}`}>
            {/* Render title */}
            <h1 className="title">Projects</h1>
            <div className="title-underline"></div>

            {/* Render projects grid */}
            <div className="projects-grid">
                {projects.map((p) => {
                    return(
                        <div key={p.title} className="project-item">
                            <img src={p.thumbnail} alt={`Thumbnail for ${p.title}`}/>
                            <div className="info">
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}