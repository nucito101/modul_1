import React from "react"
import { Outlet, useLocation } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Layout() {
  //  wir brauchen die Layout Seite damit wir das outlet vo React Router benutzen können
  // Outlet ist dafür zuständig dass alles was sich innerhalb der Seite wie Home Dashboard ProductList ... befindet die ganze Zeit dem User zeigt
  // ist ein Hook vom React router um die aktuelle Url abzurufen

  const location = useLocation()
  console.log(location)
  const hideFooter = location.pathname === "/login"
  return (
    <>
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  )
}
