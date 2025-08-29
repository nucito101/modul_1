import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Faq from "./pages/faq/Faq"
import Counter from "./pages/counter/Counter"
import Input from "./pages/input/Input"
import DayNight from "./pages/dayNight/DayNight"

function App() {
  return (
    <>
      <div className="flex justify-center">
        {/* <Faq /> */}
        {/* <Counter /> */}
        {/* <Input /> */}
        <DayNight />
      </div>
    </>
  )
}

export default App
