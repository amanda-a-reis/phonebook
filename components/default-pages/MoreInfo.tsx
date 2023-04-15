import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ContainerInfo, BoxInfo, CardPhone, CardIcon, CardText, CardInfo, ButtonBack } from '@/components/fundamental/elements'
import { axiosGet } from '@/axios/axiosMethods'
import Image from 'next/image'

export default function MoreInfoPage ({ id }: { id: string }): ReactElement {
  const [data, setData] = useState({ name: '', age: '', phones: [] })

  useEffect(() => {
    if (id !== '[id]') {
      const dataFetch = async (): Promise<void> => {
        const contact = await axiosGet(id)
        const orderPhones = contact.phones.sort((a: any, b: any) => a.id - b.id)
        setData({ name: contact.name, age: contact.age, phones: orderPhones })
      }
      void dataFetch()
    }
  }, [id])

  return (
    <>
      {data
        ? (
        <ContainerInfo>
          <BoxInfo>
            <CardInfo>
            <Link href='/'>
            <ButtonBack></ButtonBack>
          </Link>
              <CardText weigth="700" size="26px">
                {data.name}
              </CardText>
              <CardText weigth="600" color="#6418C3" size="18px">
                {data.age} years old
              </CardText>
            </CardInfo>
            <CardPhone direction='column'>
            {data.phones.map((phone: any, index: number) => (
              <CardPhone key={index} mb='15px'>
                <CardIcon>
                  <Image src="/phone.png" width={16} height={16} alt="Phone Icon" />
                </CardIcon>
                <CardText mb="0" ml="10px">
                  {phone.number}
                </CardText>
              </CardPhone>
            ))}
            </CardPhone>
          </BoxInfo>
        </ContainerInfo>
          )
        : (
        <div>Loading</div>
          )}
    </>
  )
}
