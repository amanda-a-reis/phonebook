import { create, moreInfo, edit, deleteButton, searchInput } from './ids'

const url = 'http://localhost:3000/'

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

const editInfoButtonEd = `#edit-${edContactName}`

describe('Contact', () => {
  it('should create a new contact', () => {
    cy.visit(url)
    cy.get(createButton).click()
    cy.get(nameInput).type(contactName)
    cy.get(ageInput).type(contactAge)
    cy.get(phoneInput).type(contactFirstPhone)
    cy.get(actButton).click()
    cy.visit(url)
  })
  it('should verify if contact was created', () => {
    cy.visit(url)
    cy.get(moreInfoButton).click()
    cy.get(moreInfoName).should('have.text', contactName)
    cy.get(moreInfoAge).should('have.text', `${contactAge} years old`)
    cy.get(moreInfoPhone).should('have.text', contactFirstPhone)
    cy.get(moreInfoBackButton).click()
    cy.url().should('eq', url)
  })
  it('should edit contact', () => {
    cy.visit(url)
    cy.get(editInfoButton).click()
    cy.get(nameInput).type(edContactName)
    cy.get(ageInput).type(edContactAge)
    cy.get(edit.editPhoneInput).type(edContactFirstPhone)
    cy.get(actButton).click()
    cy.visit(url)
    cy.reload()
  })
  it('should delete contact', () => {
    cy.visit(url)
    cy.reload()
    cy.reload()
    cy.get(searchInput).type(edContactName)
    cy.get(editInfoButtonEd).click()
    cy.get(deleteButton).click()
  })
})
