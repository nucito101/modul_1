// wie ist die Schreibweise ?
//  zuerst kommt das Keyword class, dann der Name des Object und danach geschweifte klammern

import type Owner from "./Owner"
import type Rooms from "./Rooms"

// interne Eigenschaften bennen wir mit einem Unterstrich, um sie von nach außen sichtbare Eigenschaften zu unterscheiden

// wir stellen uns gerade nur vor, wie ein Haus aussehen sollte.
class Bauplan {
  _owner: Owner
  _rooms: Rooms
  _color: string = "weiss"
  _baseMent: boolean

  // das wäre wie ein paar Investoren, die meine Vorstellung bestätigen und lassen mich mein Haus aufbauen
  constructor(owner: Owner, room: Rooms, baseMent: boolean) {
    this._owner = owner
    this._rooms = room
    this._baseMent = baseMent
  }

  renovieren(newColor: string): void {
    this._color = newColor
    console.log(`Das Haus wurde in ${this._color} gestrichen`)
  }
}
export default Bauplan
