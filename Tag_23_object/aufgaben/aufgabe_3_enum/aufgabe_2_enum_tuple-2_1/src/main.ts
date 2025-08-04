const mitarbeitende: [number, string, string, number][] = [
  [1, "Anna Müller", "Marketing", 52000],
  [2, "Max Schmidt", "IT", 68000],
  [3, "Lisa Becker", "Personal", 48000],
  [4, "Tom Wagner", "Vertrieb", 61000],
  [5, "Sara Klein", "Finanzen", 73000],
]

console.log(mitarbeitende)

for (const [num, name, department, salary] of mitarbeitende) {
  console.log(`Num: ${num} | Name: ${name} | Abteilung: ${department} | Jahresgehalt: €${salary}`)
}
