//  unser ZIel ist dass wir uns alle port von https://jsonplaceholder.typicode.com/posts abholen wollen

const API_URL = "https://jsonplaceholder.typicode.com/posts"

type TPost = {
  user: number
  title: string
  id: number
  body: string
}

fetch(API_URL)
  .then((resp: Response) => {
    console.log(resp)
    if (!resp.ok) {
      console.error("Response does not work")
    }
    // immer nach resp bzw response ist die nächste Schritt: die Response in ein echtes Javascript Obj umwandeln, indem man resp über JSON() methode in return zurückgibst
    return resp.json()
  })
  .then((posts: TPost[]) => {
    // console.log(posts)
    posts.forEach((post: TPost) => {
      // console.log(post)
      const titleElement = document.createElement("p") as HTMLParagraphElement
      // titleElement.textContent = post.title
      // document.body.appendChild(titleElement)
      const postObjToArray = Object.entries(post)

      postObjToArray.forEach(([key, value]: [string, string | number]) => {
        if (key === "title" || key === "id") {
          let titleElement = document.createElement("p") as HTMLParagraphElement
          titleElement.textContent = `${key}: ${value.toString()}`
          document.body.appendChild(titleElement)
        }
      })
    })
  })
  .catch((error: Error) => {
    console.error(error)
  })
  .finally(() => {
    console.log("Done with fetching the posts")
  })
