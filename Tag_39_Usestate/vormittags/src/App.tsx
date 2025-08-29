import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import CounterComponent from "./components/counterComponent/CounterComponent"
import Formular from "./pages/formular/Formular"
import type { ICar } from "./interface/ICars"
import cars from "./data/cars"
import ListItem from "./components/listItem/ListItem"
import { Notifications, UserProfile } from "./Recap"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const [data] = useState<ICar[]>(cars)

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <button onClick={() => setDarkMode(!darkMode)}>
        <img src="/icon_dark-light-mode.png" alt="" />
      </button>
      <CounterComponent />
      <Formular />
      <ListItem carsArray={data} />

      <br />
      <br />
      <br />

      <UserProfile name="Joe" />
      <UserProfile name={null} />
      <UserProfile />

      <br />
      <br />
      <br />

      <Notifications count={3} />
      <Notifications count={0} />
      <Notifications />
    </div>
  )
}

export default App
