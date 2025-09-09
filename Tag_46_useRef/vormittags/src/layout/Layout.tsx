import React from "react"
import { Outlet } from "react-router"
import Header from "../component/header/Header"
import Footer from "../component/footer/Footer"

export default function Layout() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-amber-400">
        <Header />
        <main className="container mx-auto max-w-5xl px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
