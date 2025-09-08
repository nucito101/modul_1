import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Shop from "./pages/shop/Shop"
import ProductDetail from "./pages/productDetail/ProductDetail"

function App() {
  // npm i react-router
  // wir deklarieren eine Variable mit dem Name "router"
  // die wird mit der Methode createBrowser erstellt
  // innerhalb dieser Methode createBrowserRouter erstellt
  // innerhalb dieser Methode bzw function wird noch eine andre Function benötigt und zwar createRoutesFromElements
  // Danach kommt das Element Route
  // die Eltern Route haben einen offenen und schließenden Tag
  // Die Kinder Route haben nur einen einzelnen Tag
  // Die Route hat zwei Eigenschaften Attribute "path" "element"

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        {/* was man ab ":" schreibt, ist das was man in ProductDetail Seite als useParams wieder übernimmt */}
        <Route path="shop/:id" element={<ProductDetail />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
