import "./style.css"

const timeDiv = document.querySelector(".zeit") as HTMLDivElement
const startBtn = document.getElementById("btn") as HTMLButtonElement

let count = 100
let intervalId: number | undefined

startBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId)
  }

  count = 100
  timeDiv.textContent = `${count}%`

  intervalId = setInterval(() => {
    count--
    timeDiv.textContent = `${count}%`

    if (count <= 0) {
      clearInterval(intervalId)
    }
  }, 10)
})
