import { Star } from "./Star"

export class Starfield {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private stars: Star[] = []
  private xMod = 0
  private yMod = 0
  private warp = 0
  private raf = 0

  constructor(selector: string, count = 200) {
    const c = document.querySelector<HTMLCanvasElement>(selector)
    if (!c) throw new Error("Canvas not found")
    const ctx = c.getContext("2d")
    if (!ctx) throw new Error("2D context not available")
    this.canvas = c
    this.ctx = ctx
    this.handleResize()
    window.addEventListener("resize", () => this.handleResize())
    for (let i = 0; i < count; i++) this.stars.push(new Star(this.w, this.h))
    this.loop = this.loop.bind(this)
    this.raf = requestAnimationFrame(this.loop)
  }
  get w() {
    return this.canvas.width
  }
  get h() {
    return this.canvas.height
  }

  handleResize() {
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
  }

  setWarp(to: number) {
    this.warp = Math.max(0, Math.min(1, to))
  }

  setDrift(x: number, y: number) {
    this.xMod = x
    this.yMod = y
  }

  private loop() {
    const ctx = this.ctx
    if (this.warp === 0) {
      ctx.fillStyle = "rgb(0,0,0)"
      ctx.fillRect(0, 0, this.w, this.h)
    } else {
      ctx.fillStyle = "rgba(0,0,0,0.08)"
      ctx.fillRect(0, 0, this.w, this.h)
    }

    // Geschwindigkeit
    const base = 0.002
    const speed = base + this.warp * 0.013

    for (const s of this.stars) {
      ctx.fillStyle = `rgb(${s.color},${s.color},${s.color})`
      const size = s.color / 128
      ctx.fillRect(s.x, s.y, size, size)
      s.updatePos(this.xMod, this.yMod, speed, this.w, this.h)
    }
    this.raf = requestAnimationFrame(this.loop)
  }

  startWarp() {
    this.setWarp(1)
  }
  stopWarp() {
    this.setWarp(0)
  }
}
