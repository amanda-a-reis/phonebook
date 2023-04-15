import MoreInfoPage from '@/components/default-pages/MoreInfo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

export default function MoreInfo (): ReactElement {
  const { asPath } = useRouter()
  const id = asPath.replace('/contact/more-info/', '')
  return (
    <>
     <Head>
        <title>Contact</title>
      </Head>
      <MoreInfoPage id={id}></MoreInfoPage>
    </>
  )
}
