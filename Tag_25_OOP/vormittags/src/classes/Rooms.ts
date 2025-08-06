import type { RoomType } from "../enums/RoomTypes"

class Rooms {
  _roomCount: number
  _roomType: RoomType[]

  constructor(roomCount: number, roomType: RoomType[]) {
    this._roomCount = roomCount
    this._roomType = roomType
  }

  anzeigen(): void {
    console.log(`Das Haus hat ${this._roomCount}
    die Räume sind ${this._roomType}`)
  }
}

export default Rooms
