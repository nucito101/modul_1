import { IAdress } from "./IAdress"
import IMovie from "./IMovies"

interface IUser {
  username: string
  email: string
  phoneNumber: string
  address: IAdress
  role: string
  favoriteMovies: IMovie[]
}
export default IUser
