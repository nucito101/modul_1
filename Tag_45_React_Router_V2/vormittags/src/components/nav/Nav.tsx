import React from "react"
import { Link } from "react-router"
import "./Nav.css"

export default function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="shop">Store</Link>
      </nav>
    </>
  )
}
