import type { Contact, Phone } from '../interfaces'
import type { Dispatch, SetStateAction } from 'react'

function filterByName (data: Contact[], query: string): Contact[] {
  const filteredData = data.filter((contact: Contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  )
  return filteredData
}

function filterPhones (phones: Phone[], query: string): boolean {
  return phones
    .map((phone: Phone) => {
      if (phone.number.includes(query)) {
        return true
      } else {
        return false
      }
    })
    .some((el: boolean) => el)
}

function filterByPhone (data: Contact[], query: string): Contact[] {
  return data.filter((contact: Contact) => filterPhones(contact.phones, query))
}

function filter (data: Contact[], query: string, setContact: Dispatch<SetStateAction<Contact[]>>): void {
  const phone = filterByPhone(data, query)
  const name = filterByName(data, query)
  if (phone.length > 0) {
    setContact(phone)
  }
  if (name.length > 0) {
    setContact(name)
  }
  if (name.length === 0 && phone.length === 0) {
    setContact([])
  }
}

export { filter, filterByName, filterByPhone }
