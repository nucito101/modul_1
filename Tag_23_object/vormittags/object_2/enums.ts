type TWeeklyMeeting = {
  title: string
  startDate: Date
  weekday: string
}

// es gibt keine Vorgabe für die Schreibweise des Wochentages
// an verschiedenen Stellen im Code kann hier verschiedenes stehen

const DailyMeet: TWeeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekday: "Montag",
}

const TW_Meet: TWeeklyMeeting = { title: "TrainersWeekly", startDate: new Date(), weekday: "Dienstag" }

const FeedBack_Meet: TWeeklyMeeting = { title: "Feedback", startDate: new Date(), weekday: "Friday" }

// enum => eine vordefinierte Auflistung von Werten hinter denen Number stecken

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(Weekday)

for (const weekday in Weekday) {
  console.log(weekday)
}

type TWeeklyMeeting2 = {
  title: string
  starDate: Date
  weekday: Weekday
}

const vorlesung: TWeeklyMeeting2 = {
  title: "Retro",
  starDate: new Date(),
  weekday: Weekday.Monday,
}

switch (vorlesung.weekday) {
  case Weekday.Monday:
    console.log("Heute ist Montag")
    break
  case Weekday.Tuesday:
    console.log("Am Dienstag ist die Vorlesung")
    break
  default:
    console.log("ungültiger Tag")
    break
}

// Bsp 2
enum OrderStatus {
  created,
  accepted,
  InPrograss,
  InDelivery,
  Cacelled,
  Deleted,
}

type TShopOrder = {
  number: number
  customerNumber: number
  status: OrderStatus
}

const order477: TShopOrder = {
  number: 477,
  customerNumber: 5433,
  status: OrderStatus.created,
}

order477.status = OrderStatus.accepted

console.log("Bezeichnung direkt", OrderStatus[1])
console.log("Bezeichnung über Variable", OrderStatus[order477.status])

//  wenn wir keine eigene Werte angeben, wird bei einem Enum automatisch 0,1,2,... durchnummieriert
//  wenn wir aber eigene Werte vergeben, indem wir sie mit = dahinter speichern lassen

enum HTTpStatusCode {
  Ok = 200,
  Created = 201,
  BadGateWay = 400,
  NotFound = 404,
}

console.log(HTTpStatusCode)
