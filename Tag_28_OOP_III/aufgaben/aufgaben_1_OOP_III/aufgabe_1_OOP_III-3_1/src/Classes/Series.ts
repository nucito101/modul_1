import type IEpisode from "../Interfaces/IEpisode"
import type IPerson from "../Interfaces/IPerson"
import type ISeries from "../Interfaces/ISeries"

class Series implements ISeries {
  _title: string
  _description: string
  _startYear: number
  _endYear: number | null
  _episodes: IEpisode[]

  constructor(title: string, description: string, startYear: number, endYear: number | null, episodes: IEpisode[]) {
    this._title = title
    this._description = description
    this._startYear = startYear
    this._endYear = endYear
    this._episodes = episodes
  }

  printSeriesInfo(): void {
    console.log(`Title: ${this._title}`)
    console.log(`Description: ${this._description}`)
    console.log(`Start Year: ${this._startYear}`)
    console.log(`End Year: ${this._endYear ?? "-"}`)
    console.log(`Number of Episodes: ${this._episodes.length}`)
    console.log("")
    console.log("Actors:")

    const allActors: IPerson[] = this._episodes.flatMap((ep) => ep._actors)

    const uniqueActors = allActors.filter((actor, index, array) => {
      return (
        index ===
        array.findIndex(
          (a) =>
            a._firstName === actor._firstName &&
            a._lastName === actor._lastName &&
            a._birthday.getTime() === actor._birthday.getTime()
        )
      )
    })

    uniqueActors.forEach((act) => {
      console.log(`- ${act._firstName} ${act._lastName}`)
      console.log(`  - Birthday: ${act.formatDate()}`)
      console.log(`  - Gender: ${act._gender}`)
    })
  }
}
export default Series
