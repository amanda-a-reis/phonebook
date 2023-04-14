import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import {
  Button,
  TextInput,
  GlobalContainer,
  BoxRow
} from '@/components/fundamental/elements'
import axios from 'axios'
import {
  validateName,
  validateAge,
  validatePhone
} from '@/validation/validateUserInput'

export default function CreateContact (): ReactElement {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [phones, setPhones] = useState<string[]>([])

  const [errorMsg, setErrorMsg] = useState('')

  async function postContact (): Promise<void> {
    const URL = 'http://localhost:3000/api/contacts'
    await axios.post(URL, {
      name,
      age: Number(age),
      phones: [phone, ...phones]
    })
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
      <GlobalContainer>
        <h1>Create Contact</h1>
        <p>Name</p>
        <TextInput
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          required
        />
        <p>Age</p>
        <TextInput
          type="number"
          value={age}
          min={1}
          onChange={(e) => {
            setAge(e.target.value)
          }}
          required
        />
        <p>Phone number</p>
        <TextInput
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value)
          }}
          required
        />
        {phones.map((phoneItem: any, index: number) => (
          <TextInput
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
        <Button
          onClick={() => {
            const addPhoneInput = [...phones]
            addPhoneInput.push('')
            setPhones(addPhoneInput)
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            const addPhoneInput = [...phones]
            addPhoneInput.pop()
            setPhones(addPhoneInput)
          }}
        >
          -
        </Button>
        <BoxRow>
          <Button
            type="button"
            onClick={async () => {
              if (name.length === 0 || age.length === 0 || phone.length === 0) {
                setErrorMsg('Some required field is empty')
              } else if (!validateName(name)[0]) {
                setErrorMsg(validateName(name)[1])
              } else if (!validateAge(Number(age))[0]) {
                setErrorMsg(validateAge(Number(age))[1])
              } else if (!validatePhone(phone)[0]) {
                setErrorMsg(validatePhone(phone)[1])
              } else {
                await postContact()
                alert('Contact created!')
                clearFields()
                window.location.assign('/')
              }
            }}
          >
            Create
          </Button>
        </BoxRow>
        <p>{errorMsg}</p>
      </GlobalContainer>
    </>
  )
}
