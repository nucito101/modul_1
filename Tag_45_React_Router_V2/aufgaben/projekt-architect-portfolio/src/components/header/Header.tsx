import React from "react"
import Navbar from "../navbar/Navbar"

export default function Header() {
  return (
    <>
      <nav className="flex justify-between py-8 w-[90%] m-auto">
        <div>
          <img src="/icon_logo.png" alt="" />
        </div>
        <div className="flex flex-row items-center gap-30">
          <Navbar />

          <img src="/icon_darkmode.svg" alt="" />
        </div>
      </nav>
    </>
  )
}
