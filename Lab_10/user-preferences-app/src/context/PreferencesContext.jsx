import { createContext, useState } from "react";

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children}) => {
    const [theme, setTheme] = useState("light");
    const [userName, setUserName] = useState("Student");

    return (
        <PreferencesContext.Provider
        value={{ theme, setTheme, userName, setUserName}}
        >
            {children}
        </PreferencesContext.Provider>
    );
};