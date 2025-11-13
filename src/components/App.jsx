import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Projects from "./Projects"

export default function App() {
  // ----- RENDER -----
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}