import Link from 'next/link'
import type { ReactElement } from 'react'

export default function About (): ReactElement {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Homepage</Link>
    </div>
  )
}
