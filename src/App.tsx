import { Route, Routes, Link } from "react-router-dom"
import { FC, Suspense } from "react"
import { MainPageAsync } from "./pages/MainPage/MainPageAsync"
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync"
import useTheme from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

const App: FC = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App