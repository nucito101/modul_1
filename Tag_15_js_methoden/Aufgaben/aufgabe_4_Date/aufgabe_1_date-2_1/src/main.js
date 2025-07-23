const heute = new Date()
const tag = heute.getDate()
const monat = heute.getMonth() + 1
const jahr = heute.getFullYear()

const datumBindestrich = `${tag}-${monat}-${jahr}`
const datumSlash = `${tag}/${monat}/${jahr}`

const uhrzeitLokal = heute.toLocaleTimeString()
const uhrzeitUTC = heute.toUTCString().split(" ")[4]

document.getElementById("datumBindestrich").innerText = datumBindestrich
document.getElementById("datumSlash").innerText = datumSlash
document.querySelector("#uhrzeitLokal").innerText = "Lokal " + uhrzeitLokal + "Uhr"
document.querySelector("#uhrzeitUTC").innerText = "UTC " + uhrzeitUTC + "Uhr"
