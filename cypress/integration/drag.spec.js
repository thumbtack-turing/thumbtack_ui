describe('Drag and drop user flows', () => {

  // beforeEach(() => {
  //   cy.intercept('POST', 'https://thumbtack-api.herokuapp.com/graphql', (req) => {
  // if (req.body.operationName === 'user') {
  //   req.reply({ fixture: 'user'});
  //   }}
  // )

  //there is a cypress drag and drop npm in order to test drag and drop functionality
  it.skip('should be able to drag a resource in to a folder', () => {
    cy.visit('localhost:3000')
      .get('.folder')
      .drag('.resource')
      .then((success) => {
        assert.isTrue(success)
      })
  })

  it.skip('should be able to drag a folder in to a folder', () => {
    cy.visit('localhost:3000')
      .get('.folder')
      .drag('.folder')
      .then((success) => {
        assert.isTrue(success)
      })
  })


})
