import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { DeleteButton } from '@/components/fundamental/buttons'
import { useRouter } from 'next/router'
import { axiosDelete, axiosGet } from '@/axios/axiosMethods'
import Form from '../general/Form'
import { Container } from '@/components/fundamental/containers'

export default function EditContact (): ReactElement {
  const [data, setData] = useState({ name: '', age: '', phones: [] })
  const { asPath } = useRouter()
  const id = asPath.replace('/contact/edit/', '')

  async function deletContact (): Promise<void> {
    await axiosDelete(id)
    alert('Contact deleted!')
  }

  useEffect(() => {
    if (id !== '[id]') {
      const dataFetch = async (): Promise<void> => {
        const contact = await axiosGet(id)
        setData({
          name: contact.name,
          age: contact.age,
          phones: contact.phones
        })
      }
      void dataFetch()
    }
  }, [id])

  const type = {
    method: 'PUT',
    action: 'Edit',
    id,
    phoneNumbers: data.phones,
    contactName: data.name
  }

  return (
    <>
      <Container
        w="100vw"
        h="100vh"
        direction="column"
        justify="center"
        align="center"
      >
        <Form type={type} />
        <DeleteButton
          onClick={async () => {
            await deletContact()
            window.location.assign('/')
          }}
        >
          Delete
        </DeleteButton>
      </Container>
    </>
  )
}
