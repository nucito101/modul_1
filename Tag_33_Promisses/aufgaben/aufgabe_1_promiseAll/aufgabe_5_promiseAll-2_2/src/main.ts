function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
  const lorem =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

  return new Promise((resolve, reject) => {
    if (numberOfWords > 50) {
      reject("Number of words cannot exceed 50")
    } else {
      const allwords = lorem.split(" ").filter((word) => word.trim() !== "")
      const request = allwords.slice(0, numberOfWords)
      resolve(request)
    }
  })
}

generateLoremIpsum(50)
  .then((words: string[]) => words.map((word) => word.toUpperCase()))
  // .then((words: string[]) => words.map((word) => word.split("L").join("").split("T").join("").split("U").join("")))
  .then((words: string[]) => words.map((word) => word.replace("L", "").replace("T", "").replace("U", "")))
  .then((words: string[]) => words.filter((word) => word.length <= 8))
  .then((words: string[]) => {
    const result = words.join(" ")
    console.log(result)
    return result
  })
  .catch((err: string) => {
    console.error(err)
  })
