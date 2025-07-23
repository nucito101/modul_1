import { differenceInYears, differenceInHours, differenceInSeconds, format } from "date-fns"
import { de } from "date-fns/locale"

const date1970 = new Date(1970, 0, 1)
const now = new Date()

const yearsDiff = differenceInYears(now, date1970)
const hoursDiff = differenceInHours(now, date1970)
const secondsDiff = differenceInSeconds(now, date1970)

console.log(`Unterschied Jahre: ${yearsDiff}`)
console.log(`Unterschied Stunden: ${hoursDiff}`)
console.log(`Unterschied Sekunden: ${secondsDiff}`)

const myBirthday = new Date(2005, 5, 22)

const currentAge = differenceInYears(now, myBirthday)
console.log(`Alter: ${currentAge}`)

const date2007 = new Date(2007, 3, 7)
const ageIn2007 = differenceInYears(date2007, myBirthday)
console.log(`Alter am 07.04.2007: ${ageIn2007}`)

console.log(format(myBirthday, "dd.MM.yyyy HH:mm:ss", { locale: de }))
console.log(format(myBirthday, "dd.MM.yyyy HH:mm", { locale: de }))
console.log(format(myBirthday, "dd.MM.yy", { locale: de }))
console.log(format(myBirthday, "dd. MMMM yyyy", { locale: de }))
console.log(format(myBirthday, "HH:mm", { locale: de }))
console.log(format(myBirthday, "EEEE", { locale: de }))
console.log(format(myBirthday, "MMMM", { locale: de }))

const tag = format(myBirthday, "dd", { locale: de })
const monat = format(myBirthday, "MMMM", { locale: de })
const jahr = format(myBirthday, "yyyy", { locale: de })

console.log(`${tag} des ${monat} im Jahre des Herrn ${jahr}`)
