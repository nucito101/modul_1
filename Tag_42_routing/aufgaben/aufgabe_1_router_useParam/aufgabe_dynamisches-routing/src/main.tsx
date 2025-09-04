import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"
import App from "./App.tsx"
import Home from "./pages/home/Home.tsx"
import CarDetail from "./pages/carDetail/CarDetail.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cars/:id", element: <CarDetail /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />)
