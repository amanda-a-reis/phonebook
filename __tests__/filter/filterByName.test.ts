import { expect } from '@jest/globals'
import { filterByName } from '@/util/filter/searchMethods'
import type { Contact } from '@/util/interfaces'

describe('filterByName', () => {
  const phoneJohn = {
    contactId: 1,
    id: 1,
    number: '01254875421'
  }

  const phoneJane = {
    contactId: 2,
    id: 2,
    number: '01054855426'
  }

  const data: Contact[] = [
    { id: 1, name: 'John Doe', age: 20, phones: [phoneJohn] },
    { id: 2, name: 'Jane Doe', age: 20, phones: [phoneJane] }
  ]
  it('filters the data by name', () => {
    const filteredData = filterByName(data, 'John')
    expect(filteredData).toEqual([
      { id: 1, name: 'John Doe', age: 20, phones: [phoneJohn] }
    ])
  })
  it('return multiple results', () => {
    const filteredData = filterByName(data, 'Doe')
    expect(filteredData).toEqual([
      { id: 1, name: 'John Doe', age: 20, phones: [phoneJohn] },
      { id: 2, name: 'Jane Doe', age: 20, phones: [phoneJane] }
    ])
  })
  it('ignores case sensitivity', () => {
    const filteredData = filterByName(data, 'JOH')
    expect(filteredData).toEqual([
      { id: 1, name: 'John Doe', age: 20, phones: [phoneJohn] }
    ])
  })
  it('returns an empty array if there are no matches', () => {
    const filteredData = filterByName(data, 'Foo')
    expect(filteredData).toEqual([])
  })
})
