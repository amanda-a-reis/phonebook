import { sum } from '@/pages/api/sum'
import { expect } from '@jest/globals'

describe('Sum function', () => {
  it('Should return the sum of two integers', () => {
    const sut = sum(1, 5)
    expect(sut).toBe(6)
  })
})
