import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { axiosDelete, axiosGet } from '@/util/axios/axiosMethods'
import Form from '@/components/general/Form'
import { Container, DeleteButton } from '@/components/styled'

export default function EditContact (): ReactElement {
  const [data, setData] = useState({ name: '', phones: [] })
  const { asPath } = useRouter()
  const id = asPath.replace('/contact/edit/', '')

  async function deleteContact (): Promise<void> {
    await axiosDelete(id)
    alert('Contact deleted!')
  }

  useEffect(() => {
    if (id !== '[id]') {
      const dataFetch = async (): Promise<void> => {
        const contact = await axiosGet(id)
        setData({
          name: contact.name,
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
            await deleteContact()
            window.location.assign('/')
          }}
        >
          Delete
        </DeleteButton>
      </Container>
    </>
  )
}
