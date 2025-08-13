import "./style.css"

function greetUser(): void {
  try {
    const username = prompt("Please write a Name ")

    if (!username) {
      throw new Error("No No No Name")
    }
    console.log(`Hello, ${username}!`)
  } catch (error) {
    console.log("Hello I´m under the Water")
  }
}

greetUser()
