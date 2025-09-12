import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#ede1c7] via-[#e5d9c0] to-[#c69d7d]">
        <Header />
        <main className="2xl:max-w-[150rem] m-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
