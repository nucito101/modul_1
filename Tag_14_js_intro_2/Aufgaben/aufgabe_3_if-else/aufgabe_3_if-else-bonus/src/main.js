function changeToRedOrange() {
  document.body.style.background = "linear-gradient(90deg, red, orange)"
  document.querySelector("h1").style.color = "white"
}

function changeToBlue() {
  document.body.style.background = "linear-gradient(90deg, blue, lightblue)"
  document.querySelector("h1").style.color = "yellow"
}

function changeToGreen() {
  document.body.style.background = "linear-gradient(90deg, green, lightgreen)"
  document.querySelector("h1").style.color = "black"
}

function changeToPurple() {
  document.body.style.background = "linear-gradient(90deg, purple, pink)"
  document.querySelector("h1").style.color = "white"
}

document.getElementById("ball1").addEventListener("click", changeToRedOrange)
document.getElementById("ball2").addEventListener("click", changeToBlue)
document.getElementById("ball3").addEventListener("click", changeToGreen)
document.getElementById("ball4").addEventListener("click", changeToPurple)
