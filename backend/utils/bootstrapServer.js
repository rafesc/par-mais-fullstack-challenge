'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')
const cors = require('cors')

const app = require('connect')()
const swaggerTools = require('swagger-tools')
const jsyaml = require('js-yaml')
const serverPort = 8080

// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, '../controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
}

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, '../api/swagger.yaml'), 'utf8')
const swaggerDoc = jsyaml.safeLoad(spec)

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  app.use(cors())

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata())

  // Validate Swagger requests
  app.use(middleware.swaggerValidator())

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options))

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi({
    apiDocs: '/api/api-docs',
    swaggerUi: '/api/docs'
  }))

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Backend server listening on port %d (http://localhost:%d)', serverPort, serverPort)
  })

})
