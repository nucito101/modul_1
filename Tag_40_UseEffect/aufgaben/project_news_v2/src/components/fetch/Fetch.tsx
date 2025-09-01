import { useEffect, useState } from "react"
import type { Article, NewsResponse } from "../../types/news"
import ArticleCard from "../articleCard/ArticleCard"
import SearchBar from "../searchbar/SearchBar"

const API_KEY = import.meta.env.VITE_API_KEY
const URL_TOP = "http://newsapi.org/v2/top-headlines"
const URL_EVERYTHING = "http://newsapi.org/v2/everything"

export default function Fetch() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    loadTopHeadlines("us")
  }, [])

  async function loadTopHeadlines(language: string) {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(`${URL_TOP}?country=${language}&apiKey=${API_KEY}`)
      const data: any = await res.json()
      if (data.status === "ok" && data.articles) setArticles(data.articles)
      else setError(data.message || "Fehler beim Laden")
    } catch (err: any) {
      setError(err?.message || "Fehler")
    } finally {
      setLoading(false)
    }
  }

  async function Search(q: string, language: string) {
    if (!q) {
      loadTopHeadlines(language)
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch(
        `${URL_EVERYTHING}?q=${q}&language=${language}&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`
      )
      const data: NewsResponse = await res.json()
      if (data.status === "ok" && data.articles) setArticles(data.articles)
      else setError(data.message || "Fehler beim Laden")
    } catch (err: any) {
      setError(err?.message || "Fehler")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section>
        <SearchBar Search={Search} />

        {loading && <p className="text-center">Lade…</p>}
        {error && <p className="text-center">Fehler: {error}</p>}
        {!loading && !error && articles.length === 0 && <p className="text-center">Keine Ergebnisse.</p>}

        <div className="max-w-9xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  xl:grid-cols-3 3xl:grid-cols-4">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
