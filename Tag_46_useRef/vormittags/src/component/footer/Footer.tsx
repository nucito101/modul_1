import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="mt-12 border-t border-green-400">
        <div className="container mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          <p className="text-red-700 ">{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
