import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DefaultHeader from '@/components/general/Header'
import InfoCard from '@/components/info-card/InfoCard'
import { Button, SearchInput, Container } from '@/components/styled'
import { filter } from '@/util/filter/searchMethods'
import type { Contact } from '@/util/interfaces'

export default function HomePage ({ data }: { data: Contact[] }): ReactElement {
  const [contactData, setContactData] = useState(data)
  const [query, setQuery] = useState('')

  useEffect(() => {
    filter(data, query, setContactData)
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
          {contactData.map((contact: Contact, index: number) => (
            <InfoCard data={contact} key={index} />
          ))}
        </Container>
      </Container>
    </>
  )
}
