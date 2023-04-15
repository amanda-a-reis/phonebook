import type { ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Card, CardIcon, Container, Text } from '@/components/styled'
import type { Contact, Phone } from '@/util/interfaces'

export default function InfoCard ({ data }: { data: Contact }): ReactElement {
  const { name, age, phones, id } = data

  const ids = phones.map((phone: Phone) => {
    return phone.id
  })
  const minId = Math.min(...ids)
  const index = ids.indexOf(minId)
  const principalPhoneNumber = phones[index].number

  return (
    <>
      <Card w="280px" h="280px">
        <Container direction="column" justify="center" align="center">
          <Text weigth="700" size="18px">
            {name}
          </Text>
          <Text weigth="600" color="#6418C3" size="14px">
            {age} years old
          </Text>
        </Container>
        <Container w="80%" align="center">
          <CardIcon>
            <Image src="/phone.png" width={16} height={16} alt="Phone Icon" />
          </CardIcon>
          <Text mb="0" mt="0" ml="10px">
            {principalPhoneNumber}
          </Text>
        </Container>
        <Container direction="column" justify="center">
          <Link href={`/contact/more-info/${id}`}>
            <Button mb="10px">More info</Button>
          </Link>
          <Link href={`/contact/edit/${id}`}>
            <Button>Edit</Button>
          </Link>
        </Container>
      </Card>
    </>
  )
}
