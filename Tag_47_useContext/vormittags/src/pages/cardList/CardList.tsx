import React, { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { mainContext } from "../../context/MainProvider"
import CardItem from "../../ccomponents/cardItem/CardItem"

export default function CardList() {
  const { linkParam } = useParams<string>()

  // Die Variable aus dem MainContext bzw MaonProvider kann durch eine Methode und zwar useContext verwendet werden

  const { items, setLink } = useContext(mainContext)

  console.log(items)
  useEffect(() => {
    setLink(linkParam)
  }, [linkParam])

  console.log(linkParam)
  return (
    <>
      <div>
        <h2>{linkParam?.toUpperCase()} Page</h2>
        <div>
          {items.map((item: any, index: number) => {
            return (
              <div key={index}>
                <CardItem item={item} link={linkParam || ""} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
