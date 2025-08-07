import type Gender from "../Enum/EnumPerson"

class Person {
  private _name: string
  private _birthday: Date
  private _gender: Gender

  constructor(name: string, birthday: Date, gender: Gender) {
    this._name = name
    this._birthday = birthday
    this._gender = gender
  }

  public get name(): string {
    return this._name
  }

  public set name(v: string) {
    this._name = v
  }

  public get birthday(): Date {
    return this._birthday
  }

  public get gender(): Gender {
    return this._gender
  }

  public set gender(v: Gender) {
    this._gender = v
  }
}
