type Apple = {
  color: string
  size: string
  isSweet: boolean
}

const redApple: Apple = { color: "red", size: "big", isSweet: true }
const greenApple: Apple = { color: "green", size: "small", isSweet: false }
const yellowApple: Apple = { color: "yellow", size: "big", isSweet: false }

const apples: Apple[] = [redApple, greenApple, yellowApple]

for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size)
}

apples.forEach((apple) => {
  console.log(apple.color)
})

console.log(apples.length)

const pinkApple: Apple = {
  color: "pink",
  size: "medium",
  isSweet: true,
}

console.log(pinkApple)
