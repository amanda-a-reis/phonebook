import type { Dispatch, SetStateAction } from 'react'
import type { ContactMapper } from '../interfaces'

const errorMsg = {
  name: 'The name is invalid. Please, use only letters.',
  age: 'The age is invalid. Please, use a valid value.',
  phone: 'Some phone is invalid. Please, use only your local DDD and phone number.',
  required: 'Some required field is missing.'
}

function validateName (name: string): boolean {
  const isValidSize = name.length < 100 && name.length > 0
  let isValidLetters: boolean
  if (!/[^a-zA-Z]/.test(name.replace(/\s/g, ''))) {
    isValidLetters = true
  } else {
    isValidLetters = false
  }
  return isValidSize && isValidLetters
}

function validateAge (age: number): boolean {
  return String(age).length > 0 && String(age).length <= 3 && age > 0 && age < 120 && typeof age === 'number'
}

function validatePhone (phone: string): boolean {
  const isValidSize = phone.length <= 11 && phone.length >= 10
  let isValidNumber: boolean
  if (!/[^0-9]/.test(phone)) {
    isValidNumber = true
  } else {
    isValidNumber = false
  }
  return isValidSize && isValidNumber
}

async function validateCreate (data: ContactMapper, setError: Dispatch<SetStateAction<string>>, callBack: any): Promise<void> {
  const { name, age, phone, phones } = data
  const isValidPhone = phones.map((phone: string) => {
    return validatePhone(phone)
  })
  const isAllValidPhones = isValidPhone.every((el: boolean) => el) && validatePhone(phone)
  if ((name.length === 0 || age.length === 0 || phone.length === 0)) {
    setError(errorMsg.required)
  } else if (name && !validateName(name)) {
    setError(errorMsg.name)
  } else if (age && !validateAge(Number(age))) {
    setError(errorMsg.age)
  } else if (!isAllValidPhones) {
    setError(errorMsg.phone)
  } else {
    await callBack(data)
  }
}

async function validateEdit (data: ContactMapper, setError: Dispatch<SetStateAction<string>>, callBack: any): Promise<void> {
  const { name, age, phones } = data
  const isValidPhone = phones.map((phone: string) => {
    return validatePhone(phone)
  })
  const isAllValidPhones = isValidPhone.every((el: boolean) => el)
  if (name && !validateName(name)) {
    setError(errorMsg.name)
  } else if (age && !validateAge(Number(age))) {
    setError(errorMsg.age)
  } else if (!isAllValidPhones) {
    setError(errorMsg.phone)
  } else {
    await callBack(data)
  }
}

export { validateCreate, validateEdit, validateName, validateAge, validatePhone, errorMsg }
