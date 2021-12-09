// temporary
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('profile page', () => {
  const url = 'localhost:3000/myfolders';

  before(() => {
    cy.visit(url)
  })

  it('should display the correct url when the profile page is visited', () => {
    cy.url().should('include', 'myfolders')
  })

  it('should display the base folder when the page is visited', () => {
    cy.get('.folder-name')
        .should('contain', 'base')
  })

  it('should display a gallery of items in the base folder', () => {
    cy.get('.gallery-items')
        .should('contain', 'folder')
  })

  it('should display forms to create a resource or folder', () => {
    cy.get('.add-form')
        .should('be.visible')
  })

  it('should display what is typed in the create-resource form', () => {
    cy.get('.add-resource-btn').click()
      .get('.resource-name-input')
        .type('hey')
        .should('have.value', 'hey')
      .get('.resource-url-input')
        .type('https://stackoverflow.com')
        .should('have.value', 'https://stackoverflow.com')
  })

  it('should display a created resource in the current folder', () => {
    cy.get('.submit-create-resource-btn').click()
      .get('.resource').last()
        .should('contain', 'hey')
  })

  it('should display what is typed in the create-folder form', () => {
    cy.get('.add-folder-btn').click()
      .get('.folder-name-input')
        .type('i am a folder')
        .should('have.value', 'i am a folder')
  })

  it('should display a created folder in the current folder', () => {
    cy.get('.submit-create-folder-btn').click()
      .get('.folder').last()
        .should('contain', 'i am a folder')
  })

  it('should open a new window when a resource is clicked', () => {
    cy.get('a[class="resource-link"]').should('have.attr', 'target', '_blank')
  })

  it('should open a clicked folder', () => {
    cy.get('.folder').last().click()
      .url()
      .should('not.eq', '/myfolders')
  })

  it('should delete an item when the icon is clicked', () => {
    cy.visit(url)
      .get('.close-icon').last().click()
  })
})
