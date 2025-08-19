interface User {
  id: number
  name: string
  username: string
  email: string
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

// function myFetchFunc(): Promise<string>{
//   return new Promise((resolve,reject)=> {

//   })
// }

async function fetchJson<T>(url: string): Promise<T> {
  const resp = await fetch(url)
  if (!resp.ok) {
    throw new Error(`HTTP-Error ${resp.status} ${resp.statusText}`)
  }
  return resp.json() as Promise<T>
}

const BASE_URL = `https://jsonplaceholder.typicode.com`
const USER_URL = `${BASE_URL}/users`
const POST_URL = `${BASE_URL}/posts`

async function getUsers(): Promise<User[]> {
  const users = await fetchJson<User[]>(USER_URL)
  return users
}

async function getPost(): Promise<Post[]> {
  const posts = await fetchJson<Post[]>(POST_URL)
  return posts
}

async function getPostsByUser(userId: number, posts: Post[]): Promise<Post[]> {
  return posts.filter((post: Post) => {
    post.userId === userId
  })
}

async function giveMePostAndUsers(): Promise<void> {
  try {
    // hier schmeissen wir alle unsere promise function in einem Array bzw in einen Topf, damit wir die einzelne Promise nicht hängen lassen
    const userAndPosts = await Promise.all([getUsers(), getPost()])
    console.log(userAndPosts)

    // V1
    // const posts = userAndPosts[0]
    // const user = userAndPosts[1]

    // V2
    const [users, posts] = userAndPosts
    users.forEach(async (user: User) => {
      // console.log(user)
      const myResult = await getPostsByUser(user.id, posts)
      console.log(myResult)
    })
  } catch (error) {
    console.error(error)
  }
}

// giveMePostAndUsers()

async function doTasks(name: string, duration: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task wude durch ${name} nach ${duration} erledigt`)
    }, duration)
  })
}

async function runParallelTask(): Promise<void> {
  const tasks = [doTasks("Joe", 1000), doTasks("Alice", 2000), doTasks("Andre", 4000)]
  const taskArray = await Promise.all(tasks)
  taskArray.forEach((task) => {
    console.log(task)
  })
}

async function mainFunction() {
  await giveMePostAndUsers()
  await runParallelTask()
}

mainFunction()
