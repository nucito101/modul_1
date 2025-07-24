function check() {
  const input = document.getElementById("bundeslandInfo").value
  const output = document.getElementById("bundeslandInfoErgebnis")

  switch (input) {
    case "Baden-Württemberg":
      output.innerHTML = "<p>Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt</p>"
      break
    case "Bayern":
      output.innerHTML = "<p>Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt</p>"
      break
    case "Brandenburg":
      output.innerHTML = "<p>Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt</p>"
      break
    case "Bremen":
      output.innerHTML = "<p>Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt</p>"
      break
    case "Hamburg":
      output.innerHTML = "<p>Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt</p>"
      break
    case "Hessen":
      output.innerHTML = "<p>Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt</p>"
      break
    case "Mecklenburg-Vorpommern":
      output.innerHTML = "<p>Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt</p>"
      break
    case "Nordrhein-Westfalen":
      output.innerHTML = "<p>Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt</p>"
      break
    case "Rheinland-Pfalz":
      output.innerHTML = "<p>Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt</p>"
      break
    case "Saarland":
      output.innerHTML = "<p>Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt</p>"
      break
    case "Sachsen":
      output.innerHTML = "<p>Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt</p>"
      break
    case "Sachsen-Anhalt":
      output.innerHTML = "<p>Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt</p>"
      break
    case "Schleswig-Holstein":
      output.innerHTML = "<p>Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt</p>"
      break
    case "Thüringen":
      output.innerHTML = "<p>Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt</p>"
      break
    default:
      output.innerHTML = "<p>Ein solches Bundesland gibt es in Deutschland nicht.</p>"
  }
}
