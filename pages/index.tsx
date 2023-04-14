import Head from 'next/head'
import type { ReactElement } from 'react'
import HomePage from '@/components/default-pages/HomePage'
import axios from 'axios'

export default function Home ({ data }: any): ReactElement {
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
  const URL = 'http://localhost:3000/api/contacts'

  const result = await axios.get(URL)

  const data = result.data.contacts

  console.log(data)

  return {
    props: {
      data
    }
  }
}
