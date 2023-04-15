import type { ReactElement } from 'react'
import {
  CardText
} from '@/components/fundamental/text'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/fundamental/containers'
import { Card, CardIcon } from '@/components/fundamental/cards'
import { Button } from '@/components/fundamental/buttons'

export default function InfoCard ({ data }: any): ReactElement {
  const name = data.name
  const age = data.age
  const ids = data.phones.map((phone: any) => {
    return phone.id
  })
  const minId = Math.min(...ids)
  const index = ids.indexOf(minId)
  const principalPhoneNumber = data.phones[index].number
  const id = String(data.id)

  return (
    <>
      <Card
      w='280px'
      h='280px'
      >
        <Container
          direction='column'
          justify='center'
          align='center'
        >
          <CardText weigth="700" size="18px">
            {name}
          </CardText>
          <CardText weigth="600" color="#6418C3" size="14px">
            {age} years old
          </CardText>
        </Container>
        <Container
          w='80%'
          align='center'
        >
          <CardIcon>
            <Image src="/phone.png" width={16} height={16} alt="Phone Icon" />
          </CardIcon>
          <CardText mb="0" mt='0' ml="10px">
            {principalPhoneNumber}
          </CardText>
        </Container>
        <Container
        direction='column'
        justify='center'
        >
          <Link href={`/contact/more-info/${id}`}>
            <Button
            mb='10px'
            >More info</Button>
          </Link>
          <Link href={`/contact/edit/${id}`}>
            <Button>Edit</Button>
          </Link>
        </Container>
      </Card>
    </>
  )
}
