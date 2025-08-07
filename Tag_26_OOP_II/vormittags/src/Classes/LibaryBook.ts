class LibaryBook {
  private _id: string = ""
  private _currentOwner: string = ""
  private _title: string = ""
  public _author: string = ""
  private _isborrowed: boolean = false

  private generateId(): string {
    const myId = `ìd:${Math.floor(Math.random() * 100 + 1)}`
    return myId
  }

  constructor(title: string, author: string) {
    this._id = this.generateId()
    this._title = title
    this._author = author
  }

  public borrowBook(name: string): void {
    if (!this._isborrowed) {
      this._isborrowed = true
      this._currentOwner = name
    } else {
      console.error(`The Book ${this._title} is already borrowed`)
    }
  }

  public returnBook(): void {
    if (this._isborrowed) {
      this._isborrowed = false
      this._currentOwner = ""
    } else {
      console.error(`The Book ${this._title} was not borrowed`)
    }
  }
}
export default LibaryBook
