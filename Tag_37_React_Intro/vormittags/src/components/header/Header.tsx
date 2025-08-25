import React from "react"
import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        {/* statt class schreiben wir in React Ts className */}
        <span className="header_span">Title</span>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </nav>
      </header>
    </>
  )
}
