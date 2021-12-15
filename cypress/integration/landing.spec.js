import { createYield } from "typescript"

describe('landing page flows', () => {

  it.skip('should have a header', () => {
    cy.get('.header')
  })

  it.skip('should have 3 buttons', () => {
    cy.get('.header')
      .get('.menu')
      .children()
      .should('have.length', 3)
  })

  it.skip('home button should take you home', () => {
    cy.get('.home')
      .click()
      .url()
      .should('include', '/')
  })

  //i would then test the other links & fixed button at the bottom of the screen similarly to how I tested the home button

  //i would test features to make sure there were 3 children

  //i would test how it works for 4 children

  //i would test the footer to make sure it was there. no buttons on the footer are actually functional, it was more just for looks (and obviously its not a real real app)

})