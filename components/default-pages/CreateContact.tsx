import type { ReactElement } from 'react'
import Form from '@/components/general/Form'
import { Container } from '@/components/styled'

export default function CreateContact (): ReactElement {
  const type = {
    method: 'POST',
    action: 'Create'
  }
  return (
    <>
      <Container
        w="100vw"
        direction="column"
        justify="center"
        align="center"
      >
        <Form type={type} />
      </Container>
    </>
  )
}
