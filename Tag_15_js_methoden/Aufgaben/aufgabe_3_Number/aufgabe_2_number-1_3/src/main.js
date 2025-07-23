let num1 = 15.16698
console.log("15.16698:")
console.log(num1.toString())
console.log(num1.toString(2))
console.log(num1.toString(8))
console.log(num1.toString(16))
console.log("––––––––––––––")

let num2 = 7.78714
console.log("7.78714:")
console.log(num2.toString())
console.log(num2.toString(2))
console.log(num2.toString(8))
console.log(num2.toString(16))
console.log("––––––––––––––")

let num3 = Number("12.3")
console.log('"12.3":')
console.log(num3.toString())
console.log(num3.toString(2))
console.log(num3.toString(8))
console.log(num3.toString(16))
console.log("––––––––––––––")

let num4 = Number("3.14random")
console.log('"3.14random":')
if (!isNaN(num4)) {
  console.log(num4.toString())
  console.log(num4.toString(2))
  console.log(num4.toString(8))
  console.log(num4.toString(16))
} else {
  console.log("Es enthält NaN")
}
console.log("––––––––––––––")

let num5 = Number("32px")
console.log('"32px":')
if (!isNaN(num5)) {
  console.log(num5.toString())
  console.log(num5.toString(2))
  console.log(num5.toString(8))
  console.log(num5.toString(16))
} else {
  console.log("Es enthält NaN")
}
console.log("––––––––––––––")

let num6 = Number(true)
console.log("true:")
console.log(num6.toString())
console.log(num6.toString(2))
console.log(num6.toString(8))
console.log(num6.toString(16))
console.log("––––––––––––––")

let num7 = Number(false)
console.log("false:")
console.log(num7.toString())
console.log(num7.toString(2))
console.log(num7.toString(8))
console.log(num7.toString(16))
console.log("––––––––––––––")

let num8 = Number("321")
console.log('"321":')
console.log(num8.toString())
console.log(num8.toString(2))
console.log(num8.toString(8))
console.log(num8.toString(16))
console.log("––––––––––––––")
