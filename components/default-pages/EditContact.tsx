import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import {
  Button,
  TextInput,
  GlobalContainer
} from '@/components/fundamental/elements'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function EditContact (): ReactElement {
  const [data, setData] = useState({ name: '', age: '', phones: [] })
  const { asPath } = useRouter()
  const id = asPath.replace('/contact/edit/', '')

  async function deletContact (): Promise<void> {
    const URL = `http://localhost:3000/api/contacts/${id}`
    await axios.delete(URL)
    alert('User deleted!')
  }

  useEffect(() => {
    const URL = `http://localhost:3000/api/contacts/${id}`
    console.log(id)
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
      <GlobalContainer>
        <h1>Edit Contact</h1>
        <p>{data.name}</p>
        <p>Name</p>
        <TextInput />
        <p>Age</p>
        <TextInput />
        <p>Phone number</p>
        <TextInput />
        <Button>Edit</Button>
        <Button
          onClick={async () => {
            await deletContact()
            window.location.assign('/')
          }}
        >
          Delete
        </Button>
      </GlobalContainer>
    </>
  )
}
