import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold">404 – Page not found</h2>
        <p className="muted">Ups! Diese Seite gibt’s nicht.</p>
        <Link to="/home" className="text-[var(--link)] underline underline-offset-4">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
