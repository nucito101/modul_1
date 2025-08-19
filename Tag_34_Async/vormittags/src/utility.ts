//  in TS git es eine sogenannte "Utility Types", die uns helfen um bestehende types zu modifizieren ohne diese direkt zu verändern

// Partial<T> => wandelt aslle Eigenschaften eines Types in Optionale Eigenschaften um

type Person = {
  name: string
  age: number
  address?: string
}

const person1: Person = {
  name: "Joe",
  age: 20,
}

// type PartialPerson = Partial<Person>

const person2: Partial<Person> = {
  name: "Alice",
}

// Required<T> Macht alle Eigenschaften eines Type zu Pflichtfeldern

type RequiredPerson = Required<Person>

const person3: RequiredPerson = {
  name: "Bob",
  age: 20,
  address: "MusterStraße",
}

// Readonly<T> Macht alle Eigenschaften eines Type zu unveränderlich
type Produkt = {
  id: number
  name: string
  desc: string
  price: number
}

type readonlyProdukt = Readonly<Produkt>

const produkt1: readonlyProdukt = {
  id: 1,
  name: "PC",
  desc: "Gaming Pc",
  price: 5000,
}

// Eine zuweisung "id" ist nicht mehr möglich, weil es sich um eine Schreibgeschützte Eigenschaft handelt
// produkt1.id = 2

// Pick<T> Es erlaubt uns, nur bestimmte Eigenschaften eines Types auszusuchen oder zu extrahieren

type pickProdukt = Pick<Produkt, "id" | "name">

const produkt2: pickProdukt = {
  name: "Laptop",
  id: 3,
}

// Omit<T> Das ist genau das gegenteil von Pick, es entfernt bestimmte Eigenschaften aus einem Type

type ProduktWitchOutDescAndPrice = Omit<Produkt, "desc" | "price">

const produkt3: ProduktWitchOutDescAndPrice = {
  id: 4,
  name: "Handy",
}

// Record<T> Erstellt ein neues Type, der ein Obj mit Schlüsseln vom Type K und werten vom Type T beschreibt

type PermissionLevel = "admin" | "editor" | "viewer"

type Profil = {
  gehalt: number
  urlaub: boolean
}

type Permission = Record<PermissionLevel, string[]>

const userPermissionObj: Permission = {
  admin: ["create", "delete", "update"],
  editor: ["update", "view"],
  viewer: ["view"],
}

type PermissionWithAnotherType = Record<PermissionLevel, Profil>

const employee: PermissionWithAnotherType = {
  admin: {
    gehalt: 5000,
    urlaub: true,
  },
  editor: {
    gehalt: 1000,
    urlaub: false,
  },
  viewer: {
    gehalt: 0,
    urlaub: false,
  },
}

type CatName = "miffy" | "boris" | "mordred"

interface CatInfo {
  age: number
  breed: string
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
}

if (userPermissionObj.admin) {
  // an dieser stelle kann man sowohl filter als auch find Methoden benutzen
  userPermissionObj.admin.filter((role: string) => {
    if (role === "create") {
      console.log("du kannst was erstellen")
    }
  })
}
