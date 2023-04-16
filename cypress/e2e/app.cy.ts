const url = 'http://localhost:3000/'

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit(url)
  })
})
