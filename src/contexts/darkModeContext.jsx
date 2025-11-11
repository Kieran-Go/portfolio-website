import { createContext, useState } from "react";

export const DarkModeContext = createContext();

// Create and export the context provider
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}