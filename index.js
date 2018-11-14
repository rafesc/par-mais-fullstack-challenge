const proxy = require('express-http-proxy')
const app = require('express')()

// These are the default ports. If you wish to change them, remind to change in the appropriate projects
const proxyPort = 1815
const frontendPort = 3000
const backendPort = 8080

app.use('/api', proxy(`localhost:${backendPort}`, {
  proxyReqPathResolver: (req) => req.originalUrl
}))
app.use('/', proxy(`localhost:${frontendPort}`, {
  ws: true
}))
app.listen(proxyPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', proxyPort, proxyPort)
})