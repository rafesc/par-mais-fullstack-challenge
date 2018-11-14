const Swagger = require('swagger-client')
const client = Swagger('http://localhost:8080/api/api-docs')
  .then((client) => {
    client.spec.host = 'api.chucknorris.io'
    client.spec.basePath = '/'
    return client
  })

module.exports = client
