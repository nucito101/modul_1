let firstName: string = "max"
let age: number = 22
let isOnline: boolean = true

function sayHello(name: string): string {
  return "Hello" + name
}
console.log(sayHello("Andre"))
console.log(sayHello("Joe"))

function logMessage(message: string): void {
  console.log("Du bist eingelogt")
}

logMessage("Heute ist ein schöner Tag")
