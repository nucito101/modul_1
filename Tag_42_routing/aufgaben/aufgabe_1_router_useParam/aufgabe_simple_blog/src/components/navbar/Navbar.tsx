import React from "react"
import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <>
      <nav>
        <div>
          <h3>My Life</h3>
        </div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </nav>
    </>
  )
}
