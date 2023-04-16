import { errorMsg } from '../../util/validation/validateUserInput'
import { create, error } from './ids'

const {
  nameInput,
  ageInput,
  phoneInput,
  actButton
} = create

const invalidNames = {
  containNumbers: 'abc123',
  containInvalidChar: 'abc---?'
}

const invalidAges = {
  invalidLength: '2555',
  invalidRage: '125',
  invalidNegative: '-1',
  invalidZero: '0'
}

const invalidPhones = {
  invalidSizeBigger: '1254685954215',
  invalidSizeSmaller: '123',
  containLetters: '123asc',
  containInvalidChar: '123-114'
}

const validName = 'afDjGhNmN'
const validAge = '20'
const validPhone = '12547578451'

describe('Validate Create', () => {
  it('should verify if fields are empty', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.required)
  })
  it('should validate name input - contain numbers', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(invalidNames.containNumbers)
    cy.get(ageInput).type(validAge)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.name)
  })
  it('should validate name input - contain invalid char', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(invalidNames.containInvalidChar)
    cy.get(ageInput).type(validAge)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.name)
  })
  it('should validate name input - empty', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(ageInput).type(validAge)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.required)
  })
  it('should validate age input - invalid length', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(invalidAges.invalidLength)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.age)
  })
  it('should validate age input - invalid negative', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(invalidAges.invalidNegative)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.age)
  })
  it('should validate age input - invalid range', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(invalidAges.invalidRage)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.age)
  })
  it('should validate age input - invalid zero', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(invalidAges.invalidZero)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.age)
  })
  it('should validate age input - empty', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(phoneInput).type(validPhone)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.required)
  })
  it('should validate phone input - invalid char', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(validAge)
    cy.get(phoneInput).type(invalidPhones.containInvalidChar)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.phone)
  })
  it('should validate phone input - contain letters', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(validAge)
    cy.get(phoneInput).type(invalidPhones.containLetters)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.phone)
  })
  it('should validate phone input - invalid size bigger', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(validAge)
    cy.get(phoneInput).type(invalidPhones.invalidSizeBigger)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.phone)
  })
  it('should validate phone input - invalid size smaller', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(validAge)
    cy.get(phoneInput).type(invalidPhones.invalidSizeSmaller)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.phone)
  })
  it('should validate phone input - empty', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(validName)
    cy.get(ageInput).type(validAge)
    cy.get(actButton).click()
    cy.get(error).should('have.text', errorMsg.required)
  })
})
