export const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  )
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
    console.log(operationName)
    console.log(req.alias)
    // if (operationName === 'getUser') {
      req.reply({ fixture: 'mockUserData.json'})
    // }
    // else if (req.body.operationName === 'getFolder') {
    //   // req.reply({ fixture: 'mockFolderData.json'})
    // }
  }
}

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
    req.reply({ fixture: 'mockUserData.json'});
  }
}
