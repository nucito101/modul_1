enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHtmlError(): void {
  const randomValue = Math.floor(Math.random() * 6) // ergibt 0 bis 5
  let error: HtmlError

  if (randomValue <= 2) {
    error = HtmlError.OK
  } else if (randomValue === 3) {
    error = HtmlError.Redirect
  } else if (randomValue === 4) {
    error = HtmlError.BadRequest
  } else {
    error = HtmlError.InternalServerError
  }

  console.log(`Code: ${error} (${HtmlError[error]})`)
}

for (let i = 0; i < 5; i++) {
  showHtmlError()
}
