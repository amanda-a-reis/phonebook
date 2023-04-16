import { create, searchInput } from './ids'

const John = { name: 'JohnDoe', age: '20', phones: ['01254875421', '01254875333', '00000000000'] }
const Jane = { name: 'JaneDoe', age: '20', phones: ['01054855426', '00000000000'] }

const {
  nameInput,
  ageInput,
  phoneInput,
  actButton,
  addPhoneButton,
  secondaryPhoneInput,
  terciaryPhoneInput
} = create

describe('Search', () => {
  it('should create first contact', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(John.name)
    cy.get(ageInput).type(John.age)
    cy.get(phoneInput).type(John.phones[0])
    cy.get(addPhoneButton).click()
    cy.get(secondaryPhoneInput).type(John.phones[1])
    cy.get(addPhoneButton).click()
    cy.get(terciaryPhoneInput).type(John.phones[2])
    cy.get(actButton).click()
    cy.visit('http://localhost:3000')
  })
  it('should create second contact', () => {
    cy.visit('http://localhost:3000/contact/create')
    cy.get(nameInput).type(Jane.name)
    cy.get(ageInput).type(Jane.age)
    cy.get(phoneInput).type(Jane.phones[0])
    cy.get(addPhoneButton).click()
    cy.get(secondaryPhoneInput).type(Jane.phones[1])
    cy.get(actButton).click()
    cy.visit('http://localhost:3000')
  })
  it('should find unique contact by name', () => {
    cy.visit('http://localhost:3000/')
    cy.get(searchInput).type(John.name)
    cy.contains(John.name).should('exist')
  })
  it('should find multiple contacts by name', () => {
    cy.visit('http://localhost:3000/')
    cy.get(searchInput).type('Doe')
    cy.contains(John.name).should('exist')
    cy.contains(Jane.name).should('exist')
  })
  it('should find unique contact by phone', () => {
    cy.visit('http://localhost:3000/')
    cy.get(searchInput).type(John.phones[0])
    cy.contains(John.name).should('exist')
  })
  it('should find unique contact by second phone', () => {
    cy.visit('http://localhost:3000/')
    cy.get(searchInput).type(John.phones[1])
    cy.contains(John.name).should('exist')
  })
  it('should find multiple contacts by phone', () => {
    cy.visit('http://localhost:3000/')
    cy.get(searchInput).type(John.phones[2])
    cy.contains(John.name).should('exist')
    cy.contains(Jane.name).should('exist')
  })
  it('should delete contacts', () => {
    cy.visit('http://localhost:3000/')
    cy.get(`#edit-${John.name}`).click()
    cy.get('#delete-btn').click()
    cy.visit('http://localhost:3000/')
    cy.get(`#edit-${Jane.name}`).click()
    cy.get('#delete-btn').click()
  })
})
