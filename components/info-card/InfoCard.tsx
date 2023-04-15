import type { ReactElement } from 'react'
import {
  CardButton,
  BoxCard,
  CardInfo,
  CardPhone,
  CardButtonContainer,
  CardText,
  CardIcon
} from '@/components/fundamental/elements'
import Link from 'next/link'
import Image from 'next/image'

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
      <BoxCard>
        <CardInfo>
          <CardText weigth="700" size="18px">
            {name}
          </CardText>
          <CardText weigth="600" color="#6418C3" size="14px">
            {age} years old
          </CardText>
        </CardInfo>
        <CardPhone>
          <CardIcon>
            <Image src="/phone.png" width={16} height={16} alt="Phone Icon" />
          </CardIcon>
          <CardText mb="0" ml="10px">
            {principalPhoneNumber}
          </CardText>
        </CardPhone>
        <CardButtonContainer>
          <Link href={`/contact/more-info/${id}`}>
            <CardButton>More info</CardButton>
          </Link>
          <Link href={`/contact/edit/${id}`}>
            <CardButton>Edit</CardButton>
          </Link>
        </CardButtonContainer>
      </BoxCard>
    </>
  )
}
