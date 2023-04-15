import { expect } from '@jest/globals'
import { filterByPhone } from '@/util/filter/searchMethods'
import type { Contact } from '@/util/interfaces'

describe('filterByPhone', () => {
  const phoneJohn = {
    contactId: 1,
    id: 1,
    number: '01254875421'
  }

  const phoneJohn2 = {
    contactId: 1,
    id: 4,
    number: '01254875333'
  }

  const phoneJane = {
    contactId: 2,
    id: 2,
    number: '01054855426'
  }

  const comumNumber = {
    contactId: 3,
    id: 3,
    number: '00000000000'
  }

  const John = { id: 1, name: 'John Doe', age: 20, phones: [phoneJohn, phoneJohn2, comumNumber] }
  const Jane = { id: 2, name: 'Jane Doe', age: 20, phones: [phoneJane, comumNumber] }

  const data: Contact[] = [
    John,
    Jane
  ]
  it('should return unique result', () => {
    const filteredData = filterByPhone(data, '01254875421')
    expect(filteredData).toEqual([
      John
    ])
  })
  it('return multiple results', () => {
    const filteredData = filterByPhone(data, '00000000000')
    expect(filteredData).toEqual([
      John, Jane
    ])
  })
  it('return secondary number', () => {
    const filteredData = filterByPhone(data, '01254875333')
    expect(filteredData).toEqual([
      John
    ])
  })
  it('returns an empty array if there are no matches', () => {
    const filteredData = filterByPhone(data, '123')
    expect(filteredData).toEqual([])
  })
})
