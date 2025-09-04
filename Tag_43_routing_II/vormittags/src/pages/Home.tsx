import { Link } from "react-router"

export default function HomePage() {
  return (
    <div>
      <h1>Meine schoene Seite</h1>
      <p>Willkommen auf meiner schoenen Seite</p>
      <p className="active">
        Test test <Link to="/contact">Link to Contact</Link>
      </p>
    </div>
  )
}
