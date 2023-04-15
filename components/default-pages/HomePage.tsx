import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DefaultHeader from '@/components/general/Header'
import InfoCard from '../info-card/InfoCard'
import { Button, SearchInput, Container } from '@/components/styled'

export default function HomePage ({ data }: any): ReactElement {
  const [contactData, setContactData] = useState(data)
  const [query, setQuery] = useState('')

  function filterByName (): any {
    const filteredData = data.filter((contact: any) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    )
    return filteredData
  }

  function filterPhones (phones: any): boolean {
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

  function filterByPhone (): any {
    const phones = data.filter((contact: any) => filterPhones(contact.phones))
    return phones
  }

  function filter (): void {
    const phone = filterByPhone()
    const name = filterByName()
    if (phone.length > 0) {
      setContactData(phone)
    }
    if (name.length > 0) {
      setContactData(name)
    }
    if (name.length === 0 && phone.length === 0) {
      setContactData([])
    }
  }

  useEffect(() => {
    filter()
  }, [query])

  return (
    <>
      <Container direction="column" align="center" justify="center">
        <DefaultHeader />
        <Container w="90%" mt="20px" mb="20px" justify="center" align="center">
          <SearchInput
            placeholder="Search..."
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
          <Link href="/contact/create">
            <Button w="100px" h="50px" ml="15px">
              Create
            </Button>
          </Link>
        </Container>
        <Container w="90%" wrap="wrap" justify="center" align="center">
          {contactData.map((contact: any, index: number) => (
            <InfoCard data={contact} key={index} />
          ))}
        </Container>
      </Container>
    </>
  )
}
