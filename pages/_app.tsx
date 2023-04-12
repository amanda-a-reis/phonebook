import type { ReactElement } from 'react'
import { ThemeProvider, BaseStyles } from '@primer/react'

function MyApp ({
  Component,
  pageProps
}: {
  Component: any
  pageProps: any
}): ReactElement {
  return (
    <>
      <ThemeProvider>
        <BaseStyles>
          <Component {...pageProps} />
        </BaseStyles>
      </ThemeProvider>
    </>
  )
}

export default MyApp
