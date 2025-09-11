import { Outlet } from "react-router"
import Header from "../ccomponents/header/Header"
import { useContext } from "react"
import { mainContext, type MainProviderProps } from "../context/MainProvider"

export default function Layout() {
  const { darkMode } = useContext(mainContext) as MainProviderProps

  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
