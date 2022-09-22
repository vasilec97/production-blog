import { FC, Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "./providers/AppRouter"
import { Navbar } from "widgets/Navbar"
import { useTheme } from "app/providers/ThemeProviders"

import 'app/styles/index.scss'
import { Sidebar } from "widgets/Sidebar"

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App