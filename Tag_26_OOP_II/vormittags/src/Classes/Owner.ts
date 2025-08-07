class Owner {
  _name: string
  _adress: string
  _plz: number
  _city?: string
  _birthday: Date

  constructor(name: string, adress: string, plz: number, birthday: Date) {
    this._name = name
    this._adress = adress
    this._plz = plz
    this._birthday = birthday
  }
}
export default Owner
