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
                        // Iterare through each project
                        <div key={p.title} className="project-item">
                            {/* Render project thumbnail */}
                            <img src={p.thumbnail} alt={`Thumbnail for ${p.title}`}/>

                            {/* Render project title and description */}
                            <div className="info">
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                            </div>

                            {/* Render the disclaimer if it exists */}
                            {p.disclaimer && 
                                <div className={`disclaimer ${darkMode ? "dark" : ""}` }>
                                    <p><i>{p.disclaimer}</i></p>
                                </div>
                            }

                            {/* Render the buttons */}
                            <div className="buttons-container">
                                {p.github && (
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="github">
                                        GitHub
                                    </a>
                                )}

                                {p.liveDemo && (
                                    <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="demo">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}