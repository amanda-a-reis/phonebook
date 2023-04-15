function validateName (name: string): [boolean, string] {
  const isValidSize = name.length < 100 && name.length > 0
  let isValidLetters: boolean
  if (!/[^a-zA-Z]/.test(name.replace(/\s/g, ''))) {
    isValidLetters = true
  } else {
    isValidLetters = false
  }
  const isValid = isValidSize && isValidLetters
  const msg = isValid ? '' : 'The name is invalid. Please, use only letters.'
  return [isValid, msg]
}

function validateAge (age: number): [boolean, string] {
  const isValid = String(age).length > 0 && String(age).length <= 3
  const msg = isValid ? '' : 'The age is invalid. Please, use a valid value.'
  return [isValid, msg]
}

function validatePhone (phone: string): [boolean, string] {
  const isValidSize = phone.length <= 11 && phone.length >= 10
  let isValidNumber: boolean
  if (!/[^0-9]/.test(phone)) {
    isValidNumber = true
  } else {
    isValidNumber = false
  }
  const isValid = isValidSize && isValidNumber
  const msg = isValid ? '' : 'The phone is invalid. Please, use only your local DDD and phone number.'
  return [isValid, msg]
}

export { validateName, validateAge, validatePhone }
