const Hapi = require('@hapi/hapi')
const { configureRoutes } = require('./route')

const server = Hapi.server({
  host: 'localhost',
  port: 4000
})

// This function will allow us to easily extend it later
const main = async () => {
  await configureRoutes(server)
  await server.start()

  return server
}

main().then(server => {
  console.log('Server running at:', server.info.uri)
}).catch(err => {
  console.log(err)
  process.exit(1)
})