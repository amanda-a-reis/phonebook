import type { ReactElement } from 'react'
import { Box, Text } from '@primer/react'
import {
  Button,
  BoxCard,
  BoxColumn,
  BoxRow
} from '@/components/fundamental/elements'
import Link from 'next/link'

export default function InfoCard ({ data }: any): ReactElement {
  const name = data.name
  const age = data.age
  const principalPhoneNumber = data.phones[0].number
  const id = String(data.id)

  return (
    <>
      <BoxCard>
        <Box
          sx={{
            ml: 4
          }}
        >
          <BoxColumn>
            <Text
              sx={{
                fontWeight: 'bold',
                fontSize: 16
              }}
            >
              {name}
            </Text>
            <Text
              sx={{
                fontSize: 14,
                color: '#424a53'
              }}
            >
              {age}
            </Text>
            <Text
              sx={{
                fontSize: 14,
                color: '#424a53'
              }}
            >
              {principalPhoneNumber}
            </Text>
          </BoxColumn>
          <Link href={`/contact/more-info/${id}`}>
            <Button>More info</Button>
          </Link>
        </Box>
        <BoxRow>
          <Link href={`/contact/edit/${id}`}>
            <Button>Edit</Button>
          </Link>
        </BoxRow>
      </BoxCard>
    </>
  )
}
