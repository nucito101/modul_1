import Actor from "./Classes/Actor"
import Episode from "./Classes/Episode"
import Series from "./Classes/Series"
import Gender from "./Enum/Gender"

const bryan = new Actor("Bryan", "Cranston", new Date("1956-03-07"), Gender.Male)
const aaron = new Actor("Aaron", "Paul", new Date("1979-08-27"), Gender.Male)
const anna = new Actor("Anna", "Gunn", new Date("1968-04-11"), Gender.Female)

const millie = new Actor("Millie Bobby", "Brown", new Date("2004-02-19"), Gender.Female)
const finn = new Actor("Finn", "Wolfhard", new Date("2002-12-23"), Gender.Male)
const david = new Actor("David", "Harbour", new Date("1975-04-10"), Gender.Male)

const frankie = new Actor("Frankie", "Muniz", new Date("1985-12-05"), Gender.Male)
const erik = new Actor("Erik", "Per Sullivan", new Date("1991-06-12"), Gender.Male)

const bbEp1 = new Episode("Pilot", 58, "Pilot", [bryan, aaron, anna])
const bbEp2 = new Episode("Cat's in the Bag", 48, "A Cat in a Bag", [bryan, aaron])
const bbEp3 = new Episode("...And the Bag's in the River", 48, "The Bag is in the River", [bryan, aaron])

const breakingBad = new Series(
  "Breaking Bad",
  "A high school chemistry teacher turned methamphetamine manufacturer",
  2008,
  2013,
  [bbEp1, bbEp2, bbEp3]
)

const stEp1 = new Episode("Chapter One: The Vanishing of Will Byers", 49, "The Vanishing of Will Byers", [
  millie,
  finn,
  david,
])
const stEp2 = new Episode("Chapter Two: The Weirdo on Maple Street", 45, "The Weirdo on Maple Street", [millie, finn])
const stEp3 = new Episode("Chapter Three: Holly, Jolly", 42, "Holly,Jolly", [finn, david])

const strangerThings = new Series(
  "Stranger Things",
  "Kids in the 1980s confront a supernatural mystery tied to a secret lab.",
  2016,
  null,
  [stEp1, stEp2, stEp3]
)

const mitmEp1 = new Episode(
  "Malcolm, der Held",
  20,
  "Auf Anordnung seiner Mutter Lois muss der elfjährige Malcolm sich mit Stevie treffen, einem an den Rollstuhl gefesselten, hoch begabten Schüler. Stevie besucht eine Spezialklasse, in der nur besonders intelligente Kinder unterrichtet werden. Weil die anderen Kinder diese verachten, will auch Malcolm zunächst mit Stevie nichts zu tun haben. Doch es kommt noch schlimmer: Weil auch Malcolm überdurchschnittlich intelligent ist, muss er schon bald die Klasse wechseln - zu Stevie.",
  [bryan, frankie, erik]
)
const mitmEp2 = new Episode(
  "Lois sieht rot",
  20,
  "Hal und Lois wollen ihren Hochzeitstag in einem Restaurant feiern. Während Hal dort wartet und einen Martini nach dem anderen zu sich nimmt, versucht Lois herauszubekommen, wer ihr rotes Traumkleid verkokelt hat. Mit immer neuen Strafandrohungen will sie die Jungs zu einem Geständnis bewegen - vergeblich. Schließlich kommt Hal spät nachts nach Hause. Völlig entspannt zündet er sich ein Pfeifchen an. Dabei gerät etwas in Brand, und der Löschversuch verrät den Übeltäter.",
  [bryan, erik]
)
const mitmEp3 = new Episode(
  "Allein zu Haus",
  20,
  "Hal und Lois fahren zu einer Hochzeit bei Hals Verwandten. Die Familienfeier macht beiden keinen Spaß, weil Lois von seiner Familie nicht akzeptiert wird. Schließlich rettet Hal den Tag, indem er Lois eine ganz besondere Liebeserklärung macht - worauf die beiden übereinander herfallen. Außerdem soll der von der Militärakademie beurlaubte Francis auf seine drei kleinen Brüder aufpassen. Malcolm, Reese und Dewey versuchen, sich gut zu benehmen, was den drei Jungs sehr schwer fällt.",
  [erik, frankie]
)
const mitm: Series = new Series(
  "Malcolm mittendrin",
  '"Malcolm mittendrin" ist eine US-amerikanische Sitcom über den hochintelligenten Teenager Malcolm, der mit seiner chaotischen, finanziell angeschlagenen Familie in einer Kleinstadt lebt.',
  2000,
  2006,
  [mitmEp1, mitmEp2, mitmEp3]
)

mitm.printSeriesInfo()
strangerThings.printSeriesInfo()
breakingBad.printSeriesInfo()
