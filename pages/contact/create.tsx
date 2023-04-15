import CreateContact from '@/components/default-pages/CreateContact'
import Head from 'next/head'
import type { ReactElement } from 'react'

export default function Create (): ReactElement {
  return (
    <>
     <Head>
        <title>Create Contact</title>
      </Head>
      <CreateContact></CreateContact>
    </>
  )
}
