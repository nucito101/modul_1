function grades(scores: number[]): void {
  if (scores.length === 0) {
    console.log("Keine Noten")
    return
  }

  const sum = scores.reduce((acc, val) => acc + val, 0)
  const average = sum / scores.length

  let grade: string

  if (average < 50) {
    grade = "Ungenügend"
  } else if (average < 60) {
    grade = "Mangelhaft"
  } else if (average < 70) {
    grade = "Ausreichend"
  } else if (average < 80) {
    grade = "Befriedigend"
  } else if (average < 90) {
    grade = "Gut"
  } else {
    grade = "Sehr gut"
  }

  console.log(`${average.toFixed(2)} – Bewertung: ${grade}`)
}
grades([44, 11, 70, 80, 52, 88, 94, 3, 25, 46])
