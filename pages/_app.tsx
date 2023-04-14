import { GlobalContainer } from '@/components/fundamental/elements'
import type { ReactElement } from 'react'
import '@/styles/globals.css'

function MyApp ({
  Component,
  pageProps
}: {
  Component: any
  pageProps: any
}): ReactElement {
  return (
    <>
    <GlobalContainer>
      <Component {...pageProps} />
    </GlobalContainer>
    </>
  )
}

export default MyApp
