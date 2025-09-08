import React from "react"
import { Outlet, useLocation } from "react-router"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

export default function Layout() {
  const location = useLocation()
  const hideFooter = location.pathname === "/"
  const hideHeader = location.pathname === "/"
  return (
    <>
      {!hideHeader && <Header />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  )
}
