import Navbar from "./components/navbar/Navbar"
import { Outlet } from "react-router"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <header className="relative z-999">
          <Navbar />
        </header>
        <main className="z-10">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
