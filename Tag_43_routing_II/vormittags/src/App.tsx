import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import HomePage from "./pages/Home"
import ContactPage from "./pages/Contact"
import AboutPage from "./pages/About"
import Layout from "./components/Layout"
import BlogOverview from "./pages/BlogOverview.tsx"

// mit createBrowserRouter erstellen wir unseren Router -
// hier mappen wir einzelne pfade auf Komponenten die jeweils gerendert werden sollen
const router = createBrowserRouter([
  {
    //* Diese Komponente wird immer gerendert (kein path angegeben), sie enthaelt das Layout der App
    Component: Layout,
    //* matchende Elemente aus den children, werden im <Outlet/> des Layouts angezeigt
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
      {
        path: "/blog",
        Component: BlogOverview,
      },

      {
        //* Diese Route matched auf alles was mit /blog/ anfaengt
        //* Das was danach kommt, wird unter dem Namen "slug" gespeichert, so dass wir darauf reagieren koennen
        path: "/blog/:slug",
        element: <div>Detailseite</div>,
      },
      {
        //* Diese Route wird gerendert wenn keine andere matched (Fallback)
        path: "*",
        element: <div>Sorry, 404, alles kaputt.</div>,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
