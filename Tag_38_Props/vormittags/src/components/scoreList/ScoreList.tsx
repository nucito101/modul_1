import React from "react"
import { scoresArray } from "../../data/scores"
import ScoreItem from "../scoreItem/ScoreItem"

export default function ScoreList() {
  return (
    <>
      {/* wenn mit map Array arbeiten wollen, soll jeder Komponent ein props "key" mitgegeben werden, der den Eintrag indentifiziert. Das kann eine Id sein oder in dem Fall index von unserem Array */}
      <section>
        {scoresArray.map((score, index) => {
          return (
            <div key={index}>
              <ScoreItem name={score.name} points={score.points} icon={score.icon} />
            </div>
          )
        })}
      </section>
    </>
  )
}
