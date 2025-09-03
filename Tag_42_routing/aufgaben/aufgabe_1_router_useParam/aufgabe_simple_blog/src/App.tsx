import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import { Route, Routes } from "react-router"
import Blog from "./pages/blog/Blog"
import BlogPost from "./pages/blogPost/BlogPost"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
    </>
  )
}

export default App
