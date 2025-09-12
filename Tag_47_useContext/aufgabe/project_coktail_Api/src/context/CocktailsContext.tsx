// src/context/CocktailsContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react"
import type { CocktailDetail, CocktailLite } from "../types/Types"
import {
  filterByAlcoholic,
  filterByCategory,
  getCocktailById,
  listAlcoholicOptions,
  listCategories,
  searchCocktails,
} from "../api/Cocktails"

export type CocktailState = {
  // Query & Filter
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  category: string | null
  setCategory: React.Dispatch<React.SetStateAction<string | null>>
  alcoholic: string | null
  setAlcoholic: React.Dispatch<React.SetStateAction<string | null>>

  // Stammdaten
  categories: string[]
  alcoholicOptions: string[]

  // Ergebnisliste
  items: CocktailLite[]
  loading: boolean
  error: string | null

  // Detail-Dialog
  selectedId: string | null
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>
  detail: CocktailDetail | null
  detailLoading: boolean
  detailError: string | null
}

const CocktailsContext = createContext<CocktailState | null>(null)

export function useCocktails() {
  const ctx = useContext(CocktailsContext)
  if (!ctx) throw new Error("useCocktails must be used within CocktailsProvider")
  return ctx
}

export function CocktailsProvider({ children }: { children: React.ReactNode }) {
  // Query & Filter
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [alcoholic, setAlcoholic] = useState<string | null>(null)

  // Stammdaten
  const [categories, setCategories] = useState<string[]>([])
  const [alcoholicOptions, setAlcoholicOptions] = useState<string[]>([])

  // Ergebnisliste
  const [items, setItems] = useState<CocktailLite[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Detail
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [detail, setDetail] = useState<CocktailDetail | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [detailError, setDetailError] = useState<string | null>(null)

  // ---------------------------------------
  // Initial: Kategorien & Alcoholic-Optionen
  // ---------------------------------------
  useEffect(() => {
    let ignore = false
    ;(async () => {
      try {
        const [cats, alc] = await Promise.all([listCategories(), listAlcoholicOptions()])
        if (!ignore) {
          setCategories(cats)
          setAlcoholicOptions(alc)
        }
      } catch (err) {
        console.error(err)
      }
    })()
    return () => {
      ignore = true
    }
  }, [])

  // ---------------------------------------
  // Manuelle Suche (wird nur aufgerufen bei Enter oder Button)
  // ---------------------------------------
  useEffect(() => {
    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        let list: CocktailLite[] = []
        if (query.trim()) {
          setCategory(null)
          setAlcoholic(null)
          list = await searchCocktails(query.trim())
        } else if (category) list = await filterByCategory(category)
        else if (alcoholic) list = await filterByAlcoholic(alcoholic)
        else list = []
        setItems(list)
      } catch (e: any) {
        setError(e?.message ?? "Unbekannter Fehler")
      } finally {
        setLoading(false)
      }
    })()
  }, [query, category, alcoholic])

  // ---------------------------------------
  // Detail nachladen, wenn selectedId gesetzt
  // ---------------------------------------
  useEffect(() => {
    if (!selectedId) {
      setDetail(null)
      setDetailError(null)
      return
    }
    const ctrl = new AbortController()
    ;(async () => {
      setDetailLoading(true)
      setDetailError(null)
      try {
        const d = await getCocktailById(selectedId)
        if (!ctrl.signal.aborted) setDetail(d)
      } catch (e: any) {
        if (!ctrl.signal.aborted) setDetailError(e?.message ?? "Detail konnte nicht geladen werden")
      } finally {
        if (!ctrl.signal.aborted) setDetailLoading(false)
      }
    })()
    return () => ctrl.abort()
  }, [selectedId])

  const value: CocktailState = {
    // Query & Filter
    query,
    setQuery,
    category,
    setCategory,
    alcoholic,
    setAlcoholic,

    // Stammdaten
    categories,
    alcoholicOptions,

    // Ergebnisliste
    items,
    loading,
    error,

    // Detail
    selectedId,
    setSelectedId,
    detail,
    detailLoading,
    detailError,
  }

  return <CocktailsContext.Provider value={value}>{children}</CocktailsContext.Provider>
}
