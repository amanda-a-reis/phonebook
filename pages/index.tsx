import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'

export default function Home (): ReactElement {
  return (
    <>
      <Head>
        <title>Phonebook DavinTI</title>
        <meta name="description" content="Application created for technical test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <h1>Homepage</h1>
        <Link href="/about">About</Link>
      </nav>
    </>
  )
}
