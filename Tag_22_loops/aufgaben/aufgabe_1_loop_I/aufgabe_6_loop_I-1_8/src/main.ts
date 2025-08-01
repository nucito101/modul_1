const output = document.getElementById("output")
let number = 2

do {
  output.innerHTML += `<p>${number}</p>`
  number += 2
} while (number <= 20)
