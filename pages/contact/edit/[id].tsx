import EditContact from '@/components/default-pages/EditContact'
import Head from 'next/head'
import type { ReactElement } from 'react'

export default function Edit (): ReactElement {
  return (
    <>
     <Head>
        <title>Edit Contact</title>
      </Head>
      <EditContact />
    </>
  )
}
