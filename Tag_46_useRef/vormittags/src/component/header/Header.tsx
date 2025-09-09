import React from "react"
import { NavLink } from "react-router"

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium hover:text-sky-600 ${isActive ? "text-red-800" : "text-slate-700"} `
  return (
    <>
      <header className="border-b border-green-400 bg-slate-900/60">
        <div className="container mx-auto max-w-5xl p-4 flex items-center justify-between">
          <nav className="flex items-center gap-4">
            <NavLink to={"/"} className={linkClass}>
              Home
            </NavLink>
            <NavLink to={"/login"} className={linkClass}>
              Login
            </NavLink>
            <NavLink to={"/signup"} className={linkClass}>
              Sign Up
            </NavLink>
            <NavLink to={"/posts"} className={linkClass}>
              Posts
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}
