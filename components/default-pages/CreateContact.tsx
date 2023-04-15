import type { ReactElement } from 'react'
import Form from '@/components/general/Form'
import { ContainerCreate } from '../fundamental/elements'

export default function CreateContact (): ReactElement {
  const type = {
    method: 'POST',
    action: 'Create'
  }
  return (
    <>
    <ContainerCreate>
        <Form type={type} />
    </ContainerCreate>
    </>
  )
}
