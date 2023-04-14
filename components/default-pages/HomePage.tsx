import type { ReactElement } from 'react'
import Link from 'next/link'
import DefaultHeader from '@/components/general/Header'
import InfoCard from '../info-card/InfoCard'
import {
  Button,
  Container,
  TextInput,
  GlobalContainer
} from '@/components/fundamental/elements'

export default function HomePage ({ data }: any): ReactElement {
  return (
    <>
      <GlobalContainer>
        <DefaultHeader />
        <Container>
          <Link href="/contact/create">
            <Button>Create</Button>
          </Link>
        </Container>
        <Container>
          <TextInput />
          <Button>Search</Button>
        </Container>
        {data.map((contact: any, index: number) => (
          <InfoCard data={contact} key={index}/>
        ))}
      </GlobalContainer>
    </>
  )
}
