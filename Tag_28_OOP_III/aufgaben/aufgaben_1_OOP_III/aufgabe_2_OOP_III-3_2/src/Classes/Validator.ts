import { validate as isEmail } from "email-validator"

export default class Validator {
  static validateEmail(email: string | null | undefined): boolean {
    if (typeof email !== "string") return false
    const trimmed = email.trim()
    if (trimmed.length === 0) return false
    return isEmail(trimmed)
  }
}
