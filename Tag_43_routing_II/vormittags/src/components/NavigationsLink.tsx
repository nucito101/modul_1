import { NavLink } from "react-router"

interface NavigationLinkProps {
  to: string
  text: string
}
//* Wir machen aus NavigationLink eine eigene Komponente, da der className relativ komplex ist, und wir ihn nicht oft wiederholen wollen
export default function CustomNavigationLink(props: NavigationLinkProps) {
  return (
    <NavLink
      //* hier machen wir die Klasse des Navlinks davon abhaengig, ob er aktiv* ist oder nicht
      //* * aktiv heisst hier: to/href des Links entspricht der aktuell dargestellten Seite.
      className={(state) => `p-2 ${state.isActive ? "bg-amber-300" : "bg-green-300"}`}
      to={props.to}>
      {props.text}
    </NavLink>
  )
}
