// window.loginFunc = function () {
//   const username = document.querySelector("#username").value
//   document.querySelector("p").innerText = `$Hallo ${usernameInput}`
// }

const usernameInputElement = document.querySelector("#username")
const passwordInputElement = document.querySelector("#password")

const result = document.querySelector("p")

let userNameVomBackend = "Joe"
let passwordVomBackend = "12345"

document.querySelector("#login").addEventListener("submit", function (event) {
  event.preventDefault()

  const userNameInputValue = usernameInputElement.value
  const passwordInputValue = passwordInputElement.value

  if (userNameInputValue === userNameVomBackend && passwordInputValue === passwordVomBackend) {
    result.innerText = `Guten Morgen ${userNameInputValue}, du bist eingeloggt`
  } else {
    result.innerText = "password oder username ist falsch"
  }
})

// Bsp 2

document.querySelector("#live-input").addEventListener("input", function (event) {
  const inputValue = event.target.value
  document.querySelector("#live-input").style.color = "red"
  console.log("Das ist die eingabe ", inputValue.toUpperCase())
})

document.querySelector("#agree-checkbox").addEventListener("change", function (e) {
  const checkboxValue = e.target.value.checked
  console.log("checkbox ist aktiv ", checkboxValue)
})

// Bsp 3
document.querySelector("#color-picker").addEventListener("input", function (event) {
  const inputElementValue = event.target.value
  document.body.style.backgroundColor = inputElementValue
})

// Bsp 4
// const myBtn = document.querySelector("#say-hi-btn")
// const helloOutputElement = document.querySelector("#hello-output")

// myBtn.addEventListener("click", function () {
//   helloOutputElement.innerText = "Hallooo von AddEventListener"
// })

// Bsp 5
const textInputElement = document.querySelector("#text-input")

textInputElement.addEventListener("mouseover", function () {
  console.log("Die Maus wurde über mich bewegt")
  textInputElement.style.border = "3px solid red"
})

textInputElement.addEventListener("mouseout", function () {
  textInputElement.style.border = "2px solid blue"
})

// Bsp 6

const selectInputElement = document.querySelector("#select-input")
const selectOutPutElement = document.querySelector("#select-output")

selectInputElement.addEventListener("change", function () {
  console.log("ich wurde verändert")
  const selectInputValue = selectInputElement.value
  selectOutPutElement.innerText = `Your Order is ${selectInputValue}`
})

// Bsp 7

const hacker = document.querySelector("#hacker")
const log = document.querySelector("#log")

hacker.addEventListener("keyup", function (event) {
  console.log(event.code)
})
