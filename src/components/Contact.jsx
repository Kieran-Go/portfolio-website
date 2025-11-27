import "../css/Contact.css"
import { useContext } from "react"
import { DarkModeContext } from "../contexts/darkModeContext"
import { contactInfo } from "../data";
import githubImg from "../assets/images/github.svg"

export default function Contact() {
    // ----- CONTEXTS -----
    const { darkMode } = useContext(DarkModeContext);

    // ----- RENDER -----
    return(
        <div id="contact" className={`contact ${darkMode ? "dark" : ""}`}>
            {/* Render title */}
            <h1 className="title">Contact</h1>
            <div className="title-underline"></div>

            {/* Render short paragraph */}
            <p>Let's connect! I'm always happy to chat about projects, ideas, or opportunities in web development.</p>

            {/* Render contact details */}
            <div className="contact-details">
                <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                <p>Phone (mobile): <span>{contactInfo.mobile}</span></p>
            </div>

            {/* Render github button */}
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="github">
                <img src={githubImg}></img>
                <p>GitHub</p>
            </a>
        </div>
    )
}