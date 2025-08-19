export class Star {
  x: number
  y: number
  color: number

  private canvasWidth: number
  private canvasHeight: number

  constructor(width: number, height: number) {
    this.canvasWidth = width
    this.canvasHeight = height
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.color = 0
  }

  updatePos(xMod: number, yMod: number, speedMult: number, width: number, height: number) {
    this.x += xMod + (this.x - width / 2) * speedMult
    this.y += yMod + (this.y - height / 2) * speedMult
    this.color = Math.min(255, this.color + 5)

    if (this.x > width || this.x < 0) {
      this.x = Math.random() * width
      this.color = 0
    }
    if (this.y > height || this.y < 0) {
      this.y = Math.random() * height
      this.color = 0
    }
  }
}
