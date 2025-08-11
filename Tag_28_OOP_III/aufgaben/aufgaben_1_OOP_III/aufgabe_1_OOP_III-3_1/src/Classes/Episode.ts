import type IEpisode from "../Interfaces/IEpisode"
import type IPerson from "../Interfaces/IPerson"

class Episode implements IEpisode {
  _title: string
  _length: number
  _description: string
  _actors: IPerson[]

  constructor(title: string, length: number, description: string, actors: IPerson[]) {
    this._title = title
    this._length = length
    this._description = description
    this._actors = actors
  }
}

export default Episode
