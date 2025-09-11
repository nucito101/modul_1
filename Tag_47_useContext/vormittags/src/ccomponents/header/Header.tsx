import React, { useContext } from "react"
import Nav from "../nav/Nav"
import { mainContext } from "../../context/MainProvider"

export default function Header() {
  const { darkMode, setDarkMode } = useContext(mainContext)
  return (
    <div>
      <header>
        <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "light" : "Dark"}</button>
        <Nav />
      </header>
    </div>
  )
}
