import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { validateCreate, validateEdit } from '@/util/validation/validateUserInput'
import { edit, create } from '@/util/actions/actionsMethods'
import { FormInput, Container, Button, IconButton, FormErrorMsg, Text } from '@/components/styled'

export default function Form ({ type }: any): ReactElement {
  const { method, id, action, phoneNumbers, contactName } = type
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [phones, setPhones] = useState<string[]>([])

  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setErrorMsg('')
  }, [name, age, phone, phones])
  return (
    <>
      <Container w="80%" direction="column" justify="center" align="center" mt="80px">
        <Link href="/">
          <IconButton></IconButton>
        </Link>
        <Text weigth="700" size="28px">
          {action} contact
        </Text>
        {contactName
          ? (
          <Text mt="20px" weigth="700" size="20px">
            {contactName}
          </Text>
            )
          : (
              ''
            )}
        <Container w="inherit" direction="column">
          <p>Name</p>
          <FormInput
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            required
            id='name-input'
          />
        </Container>
        <Container w="inherit" direction="column">
          <p>Age</p>
          <FormInput
            type="number"
            value={age}
            min={1}
            onChange={(e) => {
              setAge(e.target.value)
            }}
            required
            id='age-input'
          />
        </Container>
        {method === 'POST'
          ? (
          <Container w="inherit" direction="column">
            <Container w="inherit" direction="column">
              <p>Phone number</p>
              <FormInput
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
                required
                id='first-phone-input'
              />
            </Container>
            {phones.map((phoneItem: any, index: number) => (
              <FormInput
                type="text"
                key={index}
                onChange={(e) => {
                  const addPhoneValue = [...phones]
                  addPhoneValue[index] = e.target.value
                  setPhones(addPhoneValue)
                }}
                required
                id={`phone-input-${index}`}
              />
            ))}
            <Container
              direction="row"
              justify="space-around"
              mb="50px"
              mt="20px"
            >
              <Button
                w="120px"
                onClick={() => {
                  const addPhoneInput = [...phones]
                  addPhoneInput.push('')
                  setPhones(addPhoneInput)
                }}
                id='plus-btn'
              >
                +
              </Button>
              <Button
                w="120px"
                onClick={() => {
                  const addPhoneInput = [...phones]
                  addPhoneInput.pop()
                  setPhones(addPhoneInput)
                }}
              >
                -
              </Button>
            </Container>
          </Container>
            )
          : (
          <Container w="inherit" direction="column">
            <p>Phone numbers</p>
            {phoneNumbers.map((phoneItem: any, index: number) => (
              <Container key={index} direction="row" align="center">
                <Text weigth="500" size="14px" mr="10px">
                  {phoneItem.number}
                </Text>
                <FormInput
                  type="text"
                  onChange={(e) => {
                    const addPhoneValue = [...phones]
                    addPhoneValue[index] = e.target.value
                    setPhones(addPhoneValue)
                  }}
                  required
                  id={`edit-input-${index}`}
                />
              </Container>
            ))}
          </Container>
            )}
        <Button
          type="button"
          onClick={async () => {
            if (method === 'PUT') {
              await validateEdit({ name, age, phone, phones, id }, setErrorMsg, edit)
            }
            if (method === 'POST') {
              await validateCreate({ name, age, phone, phones, id }, setErrorMsg, create)
            }
          }}
          mt="20px"
          id='act-btn'
        >
          {action}
        </Button>
        <FormErrorMsg id='error'>{errorMsg}</FormErrorMsg>
      </Container>
    </>
  )
}
