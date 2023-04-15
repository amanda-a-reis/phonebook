import { expect } from '@jest/globals'
import { validatePhone } from '@/util/validation/validateUserInput'

describe('validatePhone', () => {
  test('returns true for a valid phone number with 10 digits', () => {
    const phone = '1234567890'
    expect(validatePhone(phone)).toBe(true)
  })
  test('returns true for a valid phone number with 11 digits', () => {
    const phone = '12345678901'
    expect(validatePhone(phone)).toBe(true)
  })
  test('returns false for a phone number with invalid characters', () => {
    const phone = '123-456-7890'
    expect(validatePhone(phone)).toBe(false)
  })
  test('returns false for a phone number with letters', () => {
    const phone = '123Abcd'
    expect(validatePhone(phone)).toBe(false)
  })
  test('returns false for an empty phone number', () => {
    const phone = ''
    expect(validatePhone(phone)).toBe(false)
  })
  test('returns false for a phone number with less than 10 digits', () => {
    const phone = '123456789'
    expect(validatePhone(phone)).toBe(false)
  })
  test('returns false for a phone number with more than 11 digits', () => {
    const phone = '123456789012'
    expect(validatePhone(phone)).toBe(false)
  })
})
