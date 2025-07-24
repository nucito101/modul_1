import "./style.css"

const bgform = document.getElementById("colorForm").addEventListener("submit", changebg)

function changebg(e) {
  e.preventDefault()

  const color = document.getElementById("colorinput").value
  document.body.style.backgroundColor = color
}
