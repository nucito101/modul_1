import "./App.css"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"

// wie starten wir eine React App
// 1. npm create vite@latest
// 2. neme aussuchen oder . damit  wir in dem gleichen Ordner bleiben
// 3. y eintippen um weiter zu machen
// 4. React auswählen
// 5. TS auswählen
// 6. npm i // ? installiert alle Packete die für react benötigt werden
// 7. npm run dev // ? Startet das Projekt

// Ordner Struktur in React
// mode_modules = // Dort befinden sich alle Packete bzw Packages die für React benötigt werden (wir können auch packete hinzufügen durch npm i "name des Packets")
// public = // Dort werden die Bilder Fonts hochladen / angelegt. Hier kann man ganz einfach über den Pfad auf die Bilder zugreifen <img scr=./public/build.jpg" />
// src = // hier werden wir 95% unsere zeit verbringen - hier erstellen wir zwei Ordner zuerst (components & Pages)

// src / assets = //- hier kann ich auch Bilder ablegen. muss sie aber dann über "import" importiert werden um diese zu benutzen
// app.css // hier kommen nur die Style rein die die app.tsx betreffen

// index.css // hier kommt das globale Styling rein z.b <p> <h1> etc...

//  alles was man importieren soll, wird oben geschrieben

function App() {
  // app.tsx // das ist wie ein Verwaltungszentrum der App
  // hier definieren wir unsere App-komponente
  // wir können React komponente in beliebiger FunctionSyntax auch schreiben
  // z.b wäre auch so korrekt ===> const app = () => {return...} in Ordnung

  // hier kommen die Funktionen in Zukunft rein
  //  die hooks werden hier auch geschrieben

  function sayHello() {
    console.log("Hallo World")
  }
  return (
    // das ist sogennante React Fragment, React benötigt diese Syntx, sonst React nicht mecker und wir kein Error bekommen. In html DOM wird das aber nicht angepasst. Wir können dann keine Class vergeben
    //
    // <></>
    <>
      <h2>Ich bin ein h2 Element in der App.tsx</h2>
      <Home />
      <Footer />
    </>
  )
}

export default App
