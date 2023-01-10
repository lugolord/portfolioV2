import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({})

export const useThemeContext = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
