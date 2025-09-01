import React, { useState } from "react"

interface SearchProps {
  Search: (q: string, language: string) => void
}

export default function SearchBar({ Search }: SearchProps) {
  const [q, setQ] = useState("")
  const [language, setLanguage] = useState("de")

  function submit(event: React.FormEvent) {
    event.preventDefault()
    Search(q, language)
  }
  return (
    <>
      <form onSubmit={submit} className="flex flex-wrap gap-3 items-center justify-center mb-6">
        <input
          type="text"
          value={q}
          onChange={(event) => {
            setQ(event.target.value)
          }}
          placeholder="Type to search..."
          className="flex-1 max-w-[400px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <select
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={language}
          onChange={(event) => {
            setLanguage(event.target.value)
          }}>
          <option value="de">Deutsch</option>
          <option value="en">Englisch</option>
          <option value="fr">Französisch</option>
          <option value="es">Spanisch</option>
          <option value="it">Italienisch</option>
          <option value="nl">Niederländisch</option>
          <option value="pt">Portugiesisch</option>
          <option value="ru">Russisch</option>
          <option value="ar">Arabisch</option>
          <option value="zh">Chinesisch</option>
        </select>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg shadow hover:bg-[#633636] hover:text-white
         transition">
          Search
        </button>
      </form>
    </>
  )
}
