import type IEpisode from "./IEpisode"

interface ISeries {
  _title: string
  _description: string
  _startYear: number
  _endYear: number | null
  _episodes: IEpisode[]

  printSeriesInfo: () => void
}

export default ISeries
