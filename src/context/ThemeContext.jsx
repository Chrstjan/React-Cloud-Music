import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isLightMode, setIsDarkMode] = useState(false);

  const changeTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
