import { useContext } from "react";
import { DarkModeContext } from "../contexts/darkModeContext";

export default function Header() {
    // ----- CONTEXTS -----
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    // ----- RENDER -----
    return(
        <h1>Hello World!!!</h1>
    )
}