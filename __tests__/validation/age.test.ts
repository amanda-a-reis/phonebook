import { expect } from '@jest/globals'
import { validateAge } from '@/util/validation/validateUserInput'

describe('validateAge', () => {
  test('returns true for a valid age', () => {
    const age = 30
    expect(validateAge(age)).toBe(true)
  })
  test('returns false for a negative age', () => {
    const age = -10
    expect(validateAge(age)).toBe(false)
  })
  test('returns false for an age with more than 3 digits', () => {
    const age = 1000
    expect(validateAge(age)).toBe(false)
  })
  test('returns false for a non-numeric age', () => {
    const age = NaN
    expect(validateAge(age)).toBe(false)
  })
  test('returns false for an age bigger than 120', () => {
    const age = 125
    expect(validateAge(age)).toBe(false)
  })
})
