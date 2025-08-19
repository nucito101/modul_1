function reverseAndPrintString(myArr: string[] | number[]): void {
  const reverseArr = myArr.reverse()
  reverseArr.forEach((element: string | number) => {
    console.log(element)
  })
}

reverseAndPrintString(["Andre", "John", "Riya", "Rebecca"])
reverseAndPrintString([22, 44, 100, 200])

// Generics
// die function braucht die spitzen Klammern - T steht für jeden beliebigen Datentyp
// "T" muss ich dann überall innerhalb der function statt konkretem Type wie string oder number etc... verwenden
// diese <T> ist eine Konvention bzw eine Abmachung für generische Type. Wenn es um mehrere Types geht, dafür gibt es U,V, weiter

function reverseAndPrintStringWitchGenerics<T>(array: T[]): void {
  const reversearr = array.reverse()
  reversearr.forEach((element: T) => {
    console.log(element)
  })
}

reverseAndPrintStringWitchGenerics<string>(["Andre", "John", "Riya", "Rebecca"])
reverseAndPrintStringWitchGenerics<number>([22, 44, 100, 200])
