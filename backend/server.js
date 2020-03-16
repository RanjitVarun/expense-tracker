const Hapi = require('@hapi/hapi')
const Routes  = require('./routes/router')

const server = Hapi.server({
  host: 'localhost',
  port: 4000
})

// //This function will allow us to easily extend it later
// const main = async () => {
//   await Routes(server)
//   await server.start()

//   return server
// }

// main().then(server => {
//   console.log('Server running at:', server.info.uri)
// }).catch(err => {
//   console.log(err)
//   process.exit(1)
// })




server.start()

.then(()=>{
    console.log(`Server running on port 4000`);
})
.catch(err=>{
    console.log(err);
})
server.route(Routes)


module.exports=server;