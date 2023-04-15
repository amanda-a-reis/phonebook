import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import {
  validateName,
  validateAge,
  validatePhone
} from '@/validation/validateUserInput'
import { axiosPost, axiosPut } from '@/axios/axiosMethods'
import Link from 'next/link'
import { FormInput, Container, Button, IconButton, FormErrorMsg, Text } from '@/components/styled'

export default function Form ({ type }: any): ReactElement {
  const { method, id, action, phoneNumbers, contactName } = type
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [phones, setPhones] = useState<string[]>([])

  const [errorMsg, setErrorMsg] = useState('')

  async function actions (): Promise<void> {
    switch (method) {
      case 'POST': {
        let newPhones = [phone]
        if (phones.length > 0) {
          newPhones = [phone, ...phones]
        }
        await axiosPost({ name, age: Number(age), phones: newPhones })
        break
      }
      case 'PUT': {
        let newPhones
        if (phones.length > 0) {
          newPhones = [...phones]
        }
        await axiosPut({ name, age: Number(age), phones: newPhones }, id)
        break
      }
    }
  }

  function clearFields (): void {
    setName('')
    setAge('')
    setPhone('')
    setPhones([])
  }

  useEffect(() => {
    setErrorMsg('')
  }, [name, age, phone])
  return (
    <>
      <Container w="500px" direction="column" justify="center" align="center">
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
                    console.log(addPhoneValue)
                  }}
                  required
                />
              </Container>
            ))}
          </Container>
            )}
        <Button
          type="button"
          onClick={async () => {
            if (method === 'PUT') {
              const isValidPhone = phones.map((phone: string) => {
                if (phone) {
                  return validatePhone(phone)[0]
                }
                return true
              })
              const isAllValidPhones = isValidPhone.every((el: boolean) => el)
              console.log(isAllValidPhones)
              if (name && !validateName(name)[0]) {
                setErrorMsg(validateName(name)[1])
              } else if (age && !validateAge(Number(age))[0]) {
                setErrorMsg(validateAge(Number(age))[1])
              } else if (!isAllValidPhones) {
                setErrorMsg(validatePhone(phone)[1])
              } else {
                await actions()
                if (name === '' && age === '' && phones.length === 0) {
                  alert('No modification was made.')
                } else {
                  alert('Contact edited!')
                }
                clearFields()
                window.location.assign('/')
              }
            }
            if (method === 'POST') {
              const isValidPhone = phones.map((phone: string) => {
                return validatePhone(phone)[0]
              })
              const isAllValidPhones =
                isValidPhone.every((el: boolean) => el) &&
                validatePhone(phone)[0]
              if (name.length === 0 || age.length === 0 || phone.length === 0) {
                setErrorMsg('Some required field is empty')
              } else if (!validateName(name)[0]) {
                setErrorMsg(validateName(name)[1])
              } else if (!validateAge(Number(age))[0]) {
                setErrorMsg(validateAge(Number(age))[1])
              } else if (!isAllValidPhones) {
                setErrorMsg('Some phone number is incorrect.')
              } else {
                await actions()
                alert('Contact created!')
                clearFields()
                window.location.assign('/')
              }
            }
          }}
          mt="20px"
        >
          {action}
        </Button>
        <FormErrorMsg>{errorMsg}</FormErrorMsg>
      </Container>
    </>
  )
}
