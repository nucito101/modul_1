import { NavLink } from "react-router"

type NavbarProps = {
  variant?: "header" | "footer"
}

export default function Navbar({ variant = "header" }: NavbarProps) {
  const headerLink = ({ isActive }: { isActive: boolean }) =>
    `transition-colors tracking-[0.15rem] ${isActive ? "font-semibold border-y-1" : "opacity-80 hover:opacity-100"}`

  const footerLink = "text-sm font-semibold"

  return (
    <div className={variant === "header" ? "flex gap-10 uppercase text-sm" : "flex flex-col gap-5"}>
      <NavLink
        to="/home"
        className={({ isActive }) => `${variant === "header" ? headerLink({ isActive }) + " px-3" : footerLink}`}>
        Main
      </NavLink>
      <NavLink to="/gallery" className={variant === "header" ? headerLink : footerLink}>
        Gallery
      </NavLink>
      <NavLink to="/projects" className={variant === "header" ? headerLink : footerLink}>
        Projects
      </NavLink>
      <NavLink to="/certifications" className={variant === "header" ? headerLink : footerLink}>
        Certifications
      </NavLink>
      <NavLink to="/contacts" className={variant === "header" ? headerLink : footerLink}>
        Contacts
      </NavLink>
    </div>
  )
}
