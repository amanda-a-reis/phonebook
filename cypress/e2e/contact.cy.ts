import { create, moreInfo, edit, deleteButton } from './ids'

const {
  createButton,
  nameInput,
  ageInput,
  phoneInput,
  actButton
} = create

const {
  moreInfoName,
  moreInfoAge,
  moreInfoPhone,
  moreInfoBackButton
} = moreInfo

const contactName = 'kfDjGhLmN'
const contactAge = '25'
const contactFirstPhone = '25468954214'

const edContactName = 'kfDjGhLmNEd'
const edContactAge = '30'
const edContactFirstPhone = '25468954200'

const moreInfoButton = `#info-${contactName}`
const editInfoButton = `#edit-${contactName}`

describe('Contact', () => {
  it('should create a new contact', () => {
    cy.visit('http://localhost:3000/')
    cy.get(createButton).click()
    cy.get(nameInput).type(contactName)
    cy.get(ageInput).type(contactAge)
    cy.get(phoneInput).type(contactFirstPhone)
    cy.get(actButton).click()
    cy.visit('http://localhost:3000/')
  })
  it('should verify if contact was created', () => {
    cy.visit('http://localhost:3000/')
    cy.get(moreInfoButton).click()
    cy.get(moreInfoName).should('have.text', contactName)
    cy.get(moreInfoAge).should('have.text', `${contactAge} years old`)
    cy.get(moreInfoPhone).should('have.text', contactFirstPhone)
    cy.get(moreInfoBackButton).click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('should edit contact', () => {
    cy.visit('http://localhost:3000/')
    cy.get(editInfoButton).click()
    cy.get(nameInput).type(edContactName)
    cy.get(ageInput).type(edContactAge)
    cy.get(edit.editPhoneInput).type(edContactFirstPhone)
    cy.get(actButton).click()
    cy.visit('http://localhost:3000/')
  })
  it('should verify if contact was edited', () => {
    cy.visit('http://localhost:3000/')
    cy.get(`#info-${edContactName}`).click()
    cy.get(moreInfoName).should('have.text', edContactName)
    cy.get(moreInfoAge).should('have.text', `${edContactAge} years old`)
    cy.get(moreInfoPhone).should('have.text', edContactFirstPhone)
    cy.get(moreInfoBackButton).click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('should delete contact', () => {
    cy.visit('http://localhost:3000/')
    cy.get(`#edit-${edContactName}`).click()
    cy.get(deleteButton).click()
    cy.contains(edContactName).should('not.exist')
  })
})
