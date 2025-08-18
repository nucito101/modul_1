import "./style.css"

const API_KEY = import.meta.env.VITE_API_KEY as string
const BASE_URL = `https://newsapi.org/v2/everything`

const PL = {
  form: document.getElementById("search-form") as HTMLFormElement,
  q: document.getElementById("q") as HTMLInputElement,
  lang: document.getElementById("language") as HTMLSelectElement,
  sort: document.getElementById("sortBy") as HTMLSelectElement,
  status: document.getElementById("status") as HTMLDivElement,
  results: document.getElementById("results") as HTMLDivElement,
}

//# ==== STATE ====
const state = { loading: false, page: 1, pageSize: 30, total: 0 }

function setStatus(msg: string) {
  PL.status.textContent = msg
}

function fmtDate(iso?: string) {
  return iso
    ? new Date(iso).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : ""
}

//# ==== URL ====
function buildUrl(q: string, language: string, sortBy: string, page: number, pageSize: number) {
  const base = BASE_URL

  const params = new URLSearchParams()
  if (q) params.set("q", q)
  if (language) params.set("language", language)
  if (sortBy) params.set("sortBy", sortBy)
  params.set("page", String(page))
  params.set("pageSize", String(pageSize))
  params.set("apiKey", API_KEY)

  return `${base}?${params.toString()}`
}

//# ==== Card ====
function createArticleCard(a: any): HTMLElement {
  const article = document.createElement("article")
  article.className = "news-card"

  const img = document.createElement("img")
  img.className = "thumbnail"
  img.src = a.urlToImage || "https://placehold.co/600x400?text=No+Image"
  img.alt = a.title || "Artikelbild"

  const body = document.createElement("div")
  body.className = "body"

  const title = document.createElement("h3")
  title.className = "title"
  title.textContent = a.title || "(Ohne Titel)"

  const meta = document.createElement("p")
  meta.className = "meta"
  meta.textContent = `${a.source?.name ?? "Unbekannte Quelle"} • ${fmtDate(a.publishedAt)}`

  const desc = document.createElement("p")
  desc.className = "desc"
  desc.textContent = a.description ?? ""

  const link = document.createElement("a")
  link.className = "link"
  link.href = a.url
  link.target = "_blank"
  link.rel = "noopener"
  link.textContent = "Zur Quelle →"

  body.append(title, meta, desc, link)
  article.append(img, body)
  return article
}

function renderArticles(articles: any[]) {
  const frag = document.createDocumentFragment()
  for (const a of articles) {
    frag.appendChild(createArticleCard(a))
  }
  PL.results.innerHTML = ""
  PL.results.appendChild(frag)
}

//# ==== Search ====
function searchOnSubmit() {
  if (state.loading) return
  state.loading = true

  const q = PL.q.value.trim()
  const language = PL.lang.value
  const sortBy = PL.sort.value

  const url = buildUrl(q, language, sortBy, state.page, state.pageSize)

  setStatus(`Lade:`)

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.status !== "ok") throw new Error(data.message || "API error")
      state.total = data.totalResults || 0
      renderArticles(data.articles || [])
      setStatus(`Gefunden: ${state.total.toLocaleString()} Artikel`)
    })
    .catch((err) => {
      console.error(err)
      setStatus(`Fehler: ${err.message ?? "Unbekannt"}`)
    })
    .finally(() => {
      state.loading = false
    })
}

PL.form.addEventListener("submit", (e) => {
  e.preventDefault()
  searchOnSubmit()
})
