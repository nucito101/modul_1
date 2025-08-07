class Animal {
  private _species: string
  private _age: number
  private _color: string

  constructor(species: string, age: number, color: string) {
    this._species = species
    this._age = age
    this._color = color
  }

  public get species(): string {
    return this._species
  }

  public set species(v: string) {
    this._species = v
  }

  public get age(): number {
    return this._age
  }

  public set age(v: number) {
    this._age = v
  }

  public get color(): string {
    return this._color
  }

  public set color(v: string) {
    this._color = v
  }
}
export default Animal
