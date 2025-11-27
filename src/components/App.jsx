import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Projects from "./Projects"
import { useContext } from "react"
import { DarkModeContext } from "../contexts/darkModeContext"

export default function App() {
  // ----- CONTEXTS -----
  const { darkMode } = useContext(DarkModeContext);

  // ----- RENDER -----
  return (
    <div className={`content ${darkMode ? "dark" : ""}`}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}