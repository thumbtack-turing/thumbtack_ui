describe('Drag and drop user flows', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://thumbtack-api.herokuapp.com/graphql', (req) => {
  if (req.body.operationName === 'user') {
    req.reply({ fixture: 'user'});
    }}
  )
  })
})