import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-40 py-10">
        <div>
          <img src="/img-3/Logo.png" alt="" />
        </div>
        <div className="flex gap-20">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/categories">Products</NavLink>
        </div>
      </nav>
    </>
  )
}
