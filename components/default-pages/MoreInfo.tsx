import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { axiosGetById } from '@/util/axios/axiosMethods'
import { IconButton, Text, Container, Card, CardIcon } from '@/components/styled'
import type { ContactInfo, Phone, Contact } from '@/util/interfaces'

export default function MoreInfoPage ({ id }: { id: string }): ReactElement {
  const [data, setData] = useState<ContactInfo<string, Phone[]>>({ name: '', age: '', phones: [] })

  useEffect(() => {
    if (id !== '[id]') {
      const dataFetch = async (): Promise<void> => {
        const contact: Contact = await axiosGetById(id)
        const crescentOrder = contact.phones.sort((a: Phone, b: Phone) => a.id - b.id)
        setData({ name: contact.name, age: String(contact.age), phones: crescentOrder })
      }
      void dataFetch()
    }
  }, [id])

  return (
    <>
      {data
        ? (
        <Container
          w="100%"
          h="100vh"
          wrap="wrap"
          justify="center"
          align="center"
        >
          <Card w="380px" h="480px">
            <Container direction="column" justify="center" align="center">
              <Link href="/">
                <IconButton></IconButton>
              </Link>
              <Text weigth="700" size="26px">
                {data.name}
              </Text>
              <Text weigth="600" color="#6418C3" size="18px">
                {data.age} years old
              </Text>
            </Container>
            <Container w="80%" align="center" direction="column">
              {data.phones.map((phone: Phone, index: number) => (
                <Container key={index} w="80%" align="center" mb="15px">
                  <CardIcon>
                    <Image
                      src="/phone.png"
                      width={16}
                      height={16}
                      alt="Phone Icon"
                    />
                  </CardIcon>
                  <Text mb="0" mt="0" ml="10px">
                    {phone.number}
                  </Text>
                </Container>
              ))}
            </Container>
          </Card>
        </Container>
          )
        : (
        <div>Loading</div>
          )}
    </>
  )
}
