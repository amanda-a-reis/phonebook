import Head from 'next/head'
import type { ReactElement } from 'react'
import HomePage from '@/components/default-pages/HomePage'
import { axiosGet } from '@/axios/axiosMethods'

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
  const data = await axiosGet()

  return {
    props: {
      data
    }
  }
}
