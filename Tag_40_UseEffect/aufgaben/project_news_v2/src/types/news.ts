export type Article = {
  title: string
  description: string
  url: string
  urlToImage?: string
  publishedAt?: string
  source?: { name?: string }
  author?: string
}

export type NewsResponse = {
  status: "ok" | "error"
  totalResults?: number
  articles?: Article[]
  code?: string
  message?: string
}
