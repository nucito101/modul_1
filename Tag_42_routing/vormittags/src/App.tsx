import { useState } from "react"
import "./App.css"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Header from "./components/Header"
import Layout from "./components/Layout"

function App() {
  // const [path, setPath] = useState(location.pathname)
  const router = createBrowserRouter([
    {
      Component: Layout,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ])
  return (
    <>
      {/* <header className="bg-pink-500">
        <nav>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </nav>
      </header> */}

      <Header />

      {/* {path === "/" && <Home />}
      {path === "/about" && <About />}
      {path === "/contact" && <Contact />} */}

      <RouterProvider router={router} />
    </>
  )
}

export default App
