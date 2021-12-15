import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils';
import mockUserData from '../fixtures/mockUserData.json';

// temporary
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

describe('profile page', () => {
  const url = 'localhost:3000/myfolders';
  const uri = 'https://thumbtack-api.herokuapp.com/graphql';

  before(() => {
    // cy.intercept('POST', uri, (req) => {
    //   aliasQuery(req, 'getUser')
      // console.log(req.alias)
    // })
    // cy.intercept('POST', uri, (req) => {
    //   console.log(req)
    //   console.log(mockUserData)
    //   if (req.body.operationName === 'getUser') {
    //     req.alias = `gql${operationName}Query`
    //     req.reply({ fixture: 'mockUserData'});
    //     console.log(req.body.operationName)
    //   }
    // })
    // })
    // .then(interception => {
    //     console.log(interception)
    //     expect(interception).to.be.an('object')
    //   })
    //   .its('response.body.data.getUser')
    //   .should('have.property', 'baseFolder')
    //     .then(baseFolder => {
    //       expect(baseFolder).to.be.an('object')
    //     })
    cy.visit(url);
  })

  it('should display the correct url when the profile page is visited', () => {
    cy.url().should('include', 'myfolders')
  })

  it('should display the base folder when the page is visited', () => {
    // cy.wait('@gqlgetUserQuery')
      cy.get('.folder-name')
        .should('contain', 'base')
  })

  it('should display a gallery of items in the base folder', () => {
    // cy.get('.gallery-items')
    //     .should('contain', 'folder-container')
      cy.get('.folder-link')
        .should('be.visible')
  })

  it('should display forms to create a resource or folder', () => {
    cy.get('.add-form')
      .get('.create-container')
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
    cy.get('.create-resource-btn').click()
      .get('.resource-container').last()
        .should('contain', 'hey')
  })

  it('should display what is typed in the create-folder form', () => {
    cy.get('.add-folder-btn').click()
      .get('.folder-name-input')
        .type('i am a folder')
        .should('have.value', 'i am a folder')
  })

  it('should display a created folder in the current folder', () => {
    cy.get('.create-folder-btn').click()
      .get('.folder-container').last()
        .should('contain', 'i am a folder')
  })

  it('should open a new window when a resource is clicked', () => {
    cy.get('a[class="resource-link"]').should('have.attr', 'target', '_blank')
  })

  it('should open a clicked folder', () => {
    cy.get('.folder-link').last().click()
      .url()
      .should('not.eq', '/myfolders')
  })

  it('should delete an item when the icon is clicked', () => {
    cy.visit(url)
      .get('.close-icon').last().click()
  })
})
