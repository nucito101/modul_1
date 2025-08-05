const text = `Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt
Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt
Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt
Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt
Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt
Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt
Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt
Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt
Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt
Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt
Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt
Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt
Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt
Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt
Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt
Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt
Ein solches Bundesland gibt es in Deutschland nicht.`

const output = document.getElementById("output") as HTMLParagraphElement

document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  e.preventDefault()

  const lines = text.trim().split("\n")
  console.log(lines)

  const BundeslandMap = new Map()

  lines.forEach((line: string) => {
    const [name, Beschreibung] = line.split(" hat")
    console.log([name, Beschreibung])

    if (Beschreibung) {
      BundeslandMap.set(name.trim(), Beschreibung.trim())
    }
  })
  const inputElement = document.querySelector("#inputElement") as HTMLInputElement

  if (BundeslandMap.has(inputElement.value)) {
    output.textContent = BundeslandMap.get(inputElement.value)
  } else {
    output.textContent = "kein gültiges Bundesland"
  }
})
