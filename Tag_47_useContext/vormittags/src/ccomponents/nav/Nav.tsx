import React from "react"
import { NavLink } from "react-router"

export default function Nav() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/character"}>Character</NavLink>
        <NavLink to={"/location"}>Location</NavLink>
        <NavLink to={"/episode"}>Episoden</NavLink>
      </nav>
    </>
  )
}
