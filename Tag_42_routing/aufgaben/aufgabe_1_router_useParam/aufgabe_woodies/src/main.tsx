import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"
import App from "./App.tsx"
import Home from "./pages/home/Home.tsx"
import About from "./pages/about/About.tsx"
import Categories from "./pages/categories/Categories.tsx"
import Jenson from "./pages/jenson/Jenson.tsx"
import Deon from "./pages/deon/Deon.tsx"
import Krisha from "./pages/krisha/Krisha.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "categories", element: <Categories /> },
      { path: "jenson", element: <Jenson /> },
      { path: "deon", element: <Deon /> },
      { path: "krisha", element: <Krisha /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />)
