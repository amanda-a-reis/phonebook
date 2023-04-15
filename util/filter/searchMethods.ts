function filterByName (data: any, query: string): any {
  const filteredData = data.filter((contact: any) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  )
  return filteredData
}

function filterPhones (phones: any, query: string): boolean {
  return phones
    .map((phone: any) => {
      if (phone.number.includes(query)) {
        return true
      } else {
        return false
      }
    })
    .some((el: boolean) => el)
}

function filterByPhone (data: any, query: string): any {
  const phones = data.filter((contact: any) => filterPhones(contact.phones, query))
  return phones
}

function filter (data: any, query: string, setContact: any): void {
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

export { filter }
