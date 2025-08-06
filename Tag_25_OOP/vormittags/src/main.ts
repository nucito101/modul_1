import "./classes/Bauplan"
import Bauplan from "./classes/Bauplan"
import Owner from "./classes/Owner"
import Rooms from "./classes/Rooms"
import { RoomType } from "./enums/RoomTypes"
// Diese Objekte sind Instanzen von Klassen die als Blaupausen oder Vorlage für die Objekte dienen. Jedes Objekt kann Daten wie Eigenschaften speichern und bestimmte Aktionen ausführen (Methoden)

// OOP => Objectorientierte Programmierung
// OOP ist ein Programierstil, bei dem die Software in Objekte unterteilt sind

// type Bauplan = {
//   _besitzer: string
//   tiefGarage: boolean
// }

// const haus1: Bauplan = {
//   _besitzer: "Joe",
//   tiefGarage: true,
// }

// === Klassen ===
// const today = new Date()

// lass man was aufbauen
const room_haus = new Rooms(3, [RoomType.BEDROOM, RoomType.BATHROOM, RoomType.KITCHEN])
const besitzer_1 = new Owner("Doe", "1784/231432524")
const haus_1 = new Bauplan(besitzer_1, room_haus, false)

haus_1.renovieren("red")

// besitzer_1._vorName = "Kim"

console.log(haus_1)
besitzer_1.printInfo()

// besitzer_1._nachName = "Mustermann"
besitzer_1.nachName = "Batman"
