import { createContext, useState } from "react";

export const DarkModeContext = createContext();

// Create and export the context provider
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true";
  });

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}