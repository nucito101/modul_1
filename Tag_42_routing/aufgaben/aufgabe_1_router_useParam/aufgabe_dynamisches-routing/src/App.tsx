import { Link, Outlet } from "react-router"

export default function App() {
  return (
    <div className="App">
      <h1>SuperCarlist</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
