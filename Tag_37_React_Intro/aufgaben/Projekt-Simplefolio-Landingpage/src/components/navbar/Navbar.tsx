import React from "react"

export default function Navbar() {
  return (
    <>
      <nav className="">
        <div className="h-16 flex items-center justify-between border-solid border-red-300 px-5" id="nav_container">
          <div className="font-bold tracking-wide text-xl">JS.</div>
          <div className="flex gap-6 flex-row ">
            <ul className="flex gap-6 text-sm text-color-accent">
              <li>
                <a href="#">projects</a>
              </li>
              <li>
                <a href="#">skills</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
            {/* <img src="null" alt="Darkmode toggle" /> */}
          </div>
        </div>
      </nav>
    </>
  )
}
