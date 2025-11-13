import "../css/Contact.css"
import { useContext } from "react"
import { DarkModeContext } from "../contexts/darkModeContext"

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
                <p>Email: <a href="mailto:kieran.a.gough@gmail.com">kieran.a.gough@gmail.com</a></p>
                <p>Phone (mobile): <span>+61 479 119 194</span></p>
            </div>
        </div>
    )
}