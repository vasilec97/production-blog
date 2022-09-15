import { useContext } from "react"
import { ThemeContext, Theme, LOCAL_STPRAGE_THEME_KEY } from "./ThemeContext"

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export default function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STPRAGE_THEME_KEY, newTheme)
  }

  return {
    theme, toggleTheme
  }
}