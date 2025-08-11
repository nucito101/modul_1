import Validator from "./Validator"

class Customer {
  private _name: string = ""
  private _email: string = ""
  private _address: string = ""
  private _postalCode: string = ""
  private _city: string = ""

  public get name(): string {
    return this._name
  }

  public set name(v: string) {
    if (v.length > 60) {
      console.error("The name may be a maximum of 60 characters long.")
    } else {
      this._name = v
    }
  }

  public get email(): string {
    return this._email
  }

  public set email(v: string) {
    if (!Validator.validateEmail(v)) {
      console.error("The e-mail address is invalid.")
      return
    }
    // optional: normalisieren
    this._email = v.trim().toLowerCase()
  }

  public get address(): string {
    return this._address
  }

  public set address(v: string) {
    this._address = v
  }

  public get postalCode(): string {
    return this._postalCode
  }

  public set postalCode(v: string) {
    const plz = Number(v)
    if (v.length == 5 && isNaN(plz) && plz < 0 && plz > 99999) {
      this._postalCode = v
    } else {
      console.error("The postal Code is invalid.")
    }
  }

  public get city(): string {
    return this._city
  }

  public set city(v: string) {
    this._city = v
  }

  constructor(name: string, email: string, addres: string, postalCode: string, city: string) {
    this.name = name
    this.email = email
    this.address = addres
    this.postalCode = postalCode
    this.city = city
  }
}

export default Customer
