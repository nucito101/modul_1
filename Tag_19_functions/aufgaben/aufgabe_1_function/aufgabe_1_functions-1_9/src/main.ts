function introducePerson(vorname: string, nachname: string, geburtsort: string, alter: number, wohnort: string): void {
  console.log(
    "Mein Name ist " +
      vorname +
      " " +
      nachname +
      ". Ich bin in " +
      geburtsort +
      " geboren. Ich lerne bei SuperCode. Ich bin " +
      alter +
      " Jahre alt. Ich wohne in " +
      wohnort +
      "."
  )
}

introducePerson("Aurora", "Stardust", "New York", 20, "Celestia")
introducePerson("Baschar", "Shaheen", "Syrien", 34, "Düsseldorf")
