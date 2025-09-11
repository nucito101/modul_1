// 1 zuerst wird hier mit Methode createContext ein Kontext erstellt und direkt iexportieren
// 2 die erstellte Variable hat eine Eigenschaft namen "Provider"
// 3 der Provider ist methaphorisch gesagt wie eine Teleport Station, in der die Daten ausgelagert werden und können jederzeit hin und her sich bewegen ohne Eonschränkungen
// 4 Danach sollte in dieser Datei ein Function erstellt werden bzw eine Komponente
// 5 Die Function hat ein Parameter als Obj, die normalerweise als Children geschrieben wird. Vom Type her ist es ReactNode
// 6 die Parameter children sollte zwischen erstellten Variable mainContext gewrappt werden
// 7 die MainContect.Provider besitz noch eine andre Eigenschaft und zwar "value"
// Am Ende dieser datei sollte in Main.tsx importiert werden

import { createContext, useEffect, useState } from "react"
import type { ICharacter, IEpisode, ILocation } from "../interfaces/Interface"
import axios from "axios"

export const mainContext = createContext<MainProviderProps | null>(null)

type DataType = ICharacter | ILocation | IEpisode

export interface MainProviderProps {
  items: DataType[]
  setLink: React.Dispatch<React.SetStateAction<string | undefined>>
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [link, setLink] = useState<string | undefined>("")
  const [items, setItem] = useState<any>([])
  const [darkMode, setDarkMode] = useState<boolean>(false)

  console.log(link)

  useEffect(() => {
    const getData = async () => {
      let url = ""
      if (link) {
        if (link === "character") {
          url = "https://rickandmortyapi.com/api/character"
        } else if (link === "location") {
          url = "https://rickandmortyapi.com/api/location"
        } else if (link === "episode") {
          url = "https://rickandmortyapi.com/api/episode"
        }
        try {
          const resp = await axios.get(url)
          if (resp.data.results) {
            setItem(resp.data.results)
          }
        } catch (error) {
          console.error("Irgendwas ist schief gelaufen ")
        }
      }
    }
    getData()
  }, [link])

  // hier werden unsere States als Value übergeben, oder wie gesagt werden in einer Teleport Station gespeichert
  return <mainContext.Provider value={{ items, setLink, darkMode, setDarkMode }}>{children}</mainContext.Provider>
}
