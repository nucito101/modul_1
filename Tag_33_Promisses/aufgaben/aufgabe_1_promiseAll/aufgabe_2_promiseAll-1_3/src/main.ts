const exercise1: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Exercise 1 done")
  }, 20000)
})

const exercise2: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Exercise 2 done")
  }, 30000)
})

const exercise3: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Exercise 3 done")
  }, 40000)
})

const output = document.getElementById("output") as HTMLParagraphElement

output.textContent = "Starting..."

exercise1.then((msg: string) => {
  output.textContent = msg
})

exercise2.then((msg: string) => {
  output.textContent += ".   " + msg
})

exercise3.then((msg: string) => {
  output.textContent += ".   " + msg
})
