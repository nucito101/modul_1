let friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

for (let i = 0; i < friendNames.length; i++) {
  console.log("for: " + friendNames[i])
}

for (let name of friendNames) {
  console.log("for..of: " + name)
}
