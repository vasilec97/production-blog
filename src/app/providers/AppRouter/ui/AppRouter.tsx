import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
  return (
    <section className="page-wrapper">
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </Suspense>
    </section>
  )
}

export default AppRouter