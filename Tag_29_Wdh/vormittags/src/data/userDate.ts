import IUser from "../Interfaces/IUser"

export const userListe: IUser[] = [
  {
    username: "anna.schmidt",
    email: "anna.schmidt@example.com",
    phoneNumber: "+49 172 9876543",
    address: {
      city: "Beispielhausen",
      street: "Bahnhofstraße 8",
      postalCode: "54321",
    },
    role: "admin",
    favoriteMovies: [
      {
        title: "The Shawshank Redemption",
        rate: 9.3,
        release: "1994-09-23",
        genres: ["Drama"],
      },
      {
        title: "Pulp Fiction",
        rate: 8.9,
        release: "1994-10-14",
        genres: ["Crime", "Drama"],
      },
    ],
  },
  {
    username: "max.mustermann",
    email: "max.mustermann@example.com",
    phoneNumber: "+49 171 1234567",
    address: {
      city: "Musterstadt",
      street: "Hauptstraße 15",
      postalCode: "12345",
    },
    role: "user",
    favoriteMovies: [
      {
        title: "The Godfather",
        rate: 9.2,
        release: "1972-03-24",
        genres: ["Crime", "Drama"],
      },
      {
        title: "The Dark Knight",
        rate: 9.0,
        release: "2008-07-18",
        genres: ["Action", "Crime", "Drama"],
      },
    ],
  },
]
