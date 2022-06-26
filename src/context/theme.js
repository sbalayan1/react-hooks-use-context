import React, {createContext, useState} from 'react'
const ThemeContext = createContext()

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')
    const value = {theme, setTheme, handleToggleTheme}

    function handleToggleTheme(e) {
        setTheme(e.target.checked ? 'dark' : 'light')
    }
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}