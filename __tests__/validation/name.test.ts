import { expect } from '@jest/globals'
import { validateName } from '@/util/validation/validateUserInput'

describe('validateName', () => {
  test('returns true for a valid name', () => {
    const name = 'John Doe'
    expect(validateName(name)).toBe(true)
  })
  test('returns false for a name with invalid characters', () => {
    const name = 'John!Doe'
    expect(validateName(name)).toBe(false)
  })
  test('returns false for an empty name', () => {
    const name = ''
    expect(validateName(name)).toBe(false)
  })
  test('returns false for a name longer than 100 characters', () => {
    const name = 'a'.repeat(101)
    expect(validateName(name)).toBe(false)
  })
  test('returns true for a name with leading or trailing spaces', () => {
    const name = '  John Doe   '
    expect(validateName(name)).toBe(true)
  })
})
