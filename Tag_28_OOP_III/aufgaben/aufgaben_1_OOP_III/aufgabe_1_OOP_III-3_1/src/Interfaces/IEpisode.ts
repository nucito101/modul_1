import type IPerson from "./IPerson"

interface IEpisode {
  _title: string
  _length: number
  _description: string
  _actors: IPerson[]
}

export default IEpisode
