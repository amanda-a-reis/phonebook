interface Phone {
  id: number
  contactId: number
  number: string
}

interface Contact {
  id?: number
  name: string
  age: number
  phones: Phone[]
}

interface ContactInfo<T, D> {
  name: string
  age: T
  phones: D
}

interface ContactMapper {
  id: string
  name: string
  age: string
  phone: string
  phones: string[]
}

export type { Contact, Phone, ContactInfo, ContactMapper }
