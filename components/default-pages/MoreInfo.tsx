import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, GlobalContainer } from '@/components/fundamental/elements'
import axios from 'axios'

export default function MoreInfoPage ({ id }: { id: string }): ReactElement {
  const [data, setData] = useState({ name: '', age: '', phones: [] })

  useEffect(() => {
    const URL = `http://localhost:3000/api/contacts/${id}`
    if (id !== '[id]') {
      const dataFetch = async (): Promise<void> => {
        const data = await axios.get(URL)

        const contact = data.data.contact
        setData(contact)
      }

      void dataFetch()
    }
  }, [id])

  return (
    <>
      {data
        ? (
        <GlobalContainer>
          <h1>{data.name}</h1>
          <p>{`Age: ${data.age}`}</p>
          {data.phones.map((phone: any, index: number) => (
            <p key={index}>{phone.number}</p>
          ))}
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </GlobalContainer>
          )
        : (
        <div>Loading</div>
          )}
    </>
  )
}
