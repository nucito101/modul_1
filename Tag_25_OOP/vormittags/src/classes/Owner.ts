class Owner {
  public _vorName?: string
  private _nachName: string
  _handyNummer: string
  _email?: string

  // Getter und Setter
  // get ist für das Herausholen des Eigenschaftswert zuständig
  // get - Name der Eigenschaft - leere runde Klammern - geschweifte Klammern
  // in dne runden Klammern wird immer ein return geschrieben

  get nachName() {
    return this._nachName
  }

  // set ist für das Setzen eines Eigenschaftswert zuständig
  // set - Name der Eigenschaft dann einfach leere runde Klammern, wird er zu setzende Wert übergeben.
  // in den geschweifte Klammer wird dann der Wert einer internen Eigenschaft gesetzt
  // in Value steht der Wert, der nach dem = beim zuweisen steht
  //  ich lege auch den eindeutigen Datentype fest:

  set nachName(value: string) {
    this._nachName = value
  }

  constructor(nachName: string, handyNummer: string) {
    this._nachName = nachName
    this._handyNummer = handyNummer
  }

  printInfo(): void {
    console.log(`Der Besitzer ist ${this._vorName ?? "Unbekannt"} und seine Handynummer lautet ${this._handyNummer}`)
  }
}

export default Owner
