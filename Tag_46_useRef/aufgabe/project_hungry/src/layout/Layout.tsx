import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Layout() {
  return (
    <>
      <div className="overflow-x-hidden max-w-screen">
        <Header />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
