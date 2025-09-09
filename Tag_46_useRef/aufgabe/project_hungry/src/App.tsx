import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Team from "./pages/team/Team"
import Menu from "./pages/menu/Menu"
import Booking from "./pages/booking/Booking"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="team" element={<Team />} />
      <Route path="menu" element={<Menu />} />
      <Route path="booking" element={<Booking />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
