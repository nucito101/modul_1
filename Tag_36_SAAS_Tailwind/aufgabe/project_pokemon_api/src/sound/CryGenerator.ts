import type { Command } from "./CryTypes"
import type CryType from "./CryTypes"

export default class CryGenerator {
  audioContext!: AudioContext
  sourceSampleRate = 44100
  samplesPerFrame = 735
  noiseBuffer = 0x7fff

  init() {
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext
    if (!this.audioContext) this.audioContext = new Ctx()
    this.sourceSampleRate = this.audioContext.sampleRate
    const fps = 59.7275
    this.samplesPerFrame = Math.round(this.sourceSampleRate / fps)
  }

  async ensureRunning() {
    if (this.audioContext.state !== "running") {
      try {
        await this.audioContext.resume()
      } catch {}
    }
  }

  generate(cryType: CryType, pitch: number, length: number) {
    const pulse1 = this.generateSquareWave(cryType.pulse1, pitch, length)
    const pulse2 = this.generateSquareWave(cryType.pulse2, pitch, length)

    let pulse1Length = 0
    let pulse2Length = 0
    let leftovers = 0
    for (const command of cryType.pulse1) {
      if (command?.note) {
        const sub = (length + 0x100) * (command.note[0] + 1) + leftovers
        const thisNote = this.samplesPerFrame * (sub >> 8)
        leftovers = sub & 0xff
        pulse1Length += thisNote
      }
    }
    leftovers = 0
    for (const command of cryType.pulse2) {
      if (command?.note) {
        const sub = (length + 0x100) * (command.note[0] + 1) + leftovers
        const thisNote = this.samplesPerFrame * (sub >> 8)
        leftovers = sub & 0xff
        pulse2Length += thisNote
      }
    }

    const cutoff = Math.max(pulse1Length, pulse2Length) - this.samplesPerFrame
    const noise = this.generateNoise(cryType.noise, pitch, 0, cutoff)

    return { pulse1, pulse2, noise }
  }

  sample(bin: number, volume: number) {
    const amp = (volume / 0x10) * 0.85
    return (bin ? 1 : -1) * amp
  }

  calcDuty(duty: number, phase: number) {
    switch (duty) {
      case 0:
        return phase >= 4 / 8 && phase < 5 / 8
      case 1:
        return phase >= 4 / 8 && phase < 6 / 8
      case 2:
        return phase >= 2 / 8 && phase < 6 / 8
      case 3:
        return phase < 4 / 8 || phase >= 6 / 8
    }
    return false
  }

  generateSquareWave(commands: Command[], pitch: number, length: number) {
    let duty = 0
    const data: number[] = []
    let cmdIdx = 0
    let i = 0
    let phase = 0
    let leftovers = 0

    while (cmdIdx < commands.length) {
      const command = commands[cmdIdx]
      const isLast = cmdIdx === commands.length - 1
      if (typeof command.duty !== "undefined") {
        duty = command.duty
      } else if (command.note) {
        let [noteFrames, volume, volumeFade, periodParam] = command.note

        const sub = (length + 0x100) * (noteFrames + 1) + leftovers
        const sampleCount = this.samplesPerFrame * (sub >> 8)
        leftovers = sub & 0xff

        const periodSamples = (this.sourceSampleRate * (2048 - ((periodParam + pitch) & 0x7ff))) / 131072

        for (let idx = 0; idx < 2_500_000 && (idx < sampleCount || (isLast && volume > 0)); idx++) {
          const on = this.calcDuty(duty & 0b11, phase) ? 1 : 0
          data[i] = this.sample(on, volume)

          phase += 1 / periodSamples
          if (phase >= 1) phase -= 1
          i++

          if (idx < sampleCount && i % this.samplesPerFrame === 0) {
            duty = ((duty & 0x3f) << 2) | ((duty & 0xc0) >> 6)
          }
          if (volumeFade !== 0 && (idx + 1) % (this.samplesPerFrame * Math.abs(volumeFade)) === 0) {
            volume += volumeFade < 0 ? 1 : -1
            volume = Math.max(0, Math.min(0x0f, volume))
          }
        }
      }
      cmdIdx++
    }
    return data
  }

  generateNoise(commands: Command[], pitch: number, _length: number, cutoff: number) {
    const data: number[] = []
    let cmdIdx = 0
    let i = 0
    let leftovers = 0

    while (cmdIdx < commands.length) {
      const command = commands[cmdIdx]
      const isLast = cmdIdx === commands.length - 1
      const note = command.note

      const sub = (0x100 + 0) * (note[0] + 1) + leftovers
      const sampleCount = this.samplesPerFrame * (sub >> 8)
      leftovers = sub & 0xff

      let volume = note[1]
      const volumeFade = note[2]
      const params = (note[3] + (i >= cutoff ? 0 : pitch)) & 0xff

      let shift = (params >> 4) & 0xf
      if (shift > 0xd) shift &= 0xd
      const divider = params & 0x7
      const width7 = (params & 0x8) === 0x8
      this.noiseBuffer = 0x7fff

      const step = 2 * (divider === 0 ? 0.5 : divider) * (1 << (shift + 1))

      for (let idx = 0; idx < 2_500_000 && (idx < sampleCount || (isLast && volume > 0)); idx++) {
        const bit0 = this.noiseBuffer & 1
        data[i] = this.sample(1 ^ bit0, volume)
        i++

        if (i % step === 0) {
          const bit1 = (this.noiseBuffer >> 1) & 1
          const fb = bit0 ^ bit1
          this.noiseBuffer = (this.noiseBuffer >> 1) | (fb << 14)
          if (width7) {
            this.noiseBuffer = (this.noiseBuffer >> 1) | (fb << 6)
          }
        }

        if (volumeFade !== 0 && (idx + 1) % (this.samplesPerFrame * Math.abs(volumeFade)) === 0) {
          volume += volumeFade < 0 ? 1 : -1
          volume = Math.max(0, Math.min(0x0f, volume))
        }
      }
      cmdIdx++
    }
    return data
  }

  async play(data: number[]) {
    await this.ensureRunning()
    let peak = 0
    for (const v of data) peak = Math.max(peak, Math.abs(v))
    const norm = peak > 1 ? 1 / peak : 1
    const float = new Float32Array(data.length)
    for (let i = 0; i < data.length; i++) float[i] = data[i] * norm

    const buffer = this.audioContext.createBuffer(1, float.length, this.audioContext.sampleRate)
    buffer.copyToChannel(float, 0)

    const src = this.audioContext.createBufferSource()
    src.buffer = buffer
    const biq = this.audioContext.createBiquadFilter()
    biq.type = "lowpass"
    biq.frequency.value = Math.min(12000, this.audioContext.sampleRate * 0.45)

    src.connect(biq).connect(this.audioContext.destination)
    src.start()
  }
}
