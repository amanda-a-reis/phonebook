import Head from 'next/head'
import type { ReactElement } from 'react'
import HomePage from '@/components/default-pages/HomePage'
import { axiosGet } from '@/util/axios/axiosMethods'
import type { Contact } from '@/util/interfaces'

export default function Home ({ data }: { data: Contact[] }): ReactElement {
  return (
    <>
      <Head>
        <title>Phonebook DavinTI</title>
        <meta
          name="description"
          content="Application created for technical test"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </>
  )
}

export async function getServerSideProps (): Promise<any> {
  const data: Contact[] = await axiosGet()

  return {
    props: {
      data
    }
  }
}
