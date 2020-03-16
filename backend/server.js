const Hapi = require('@hapi/hapi')
const Routes  = require('./routes/router')

const server = Hapi.server({
  host: 'localhost',
  port: 4000
})


server.start()

.then(()=>{
    console.log(`Server running on port 4000`);
})
.catch(err=>{
    console.log(err);
})
server.route(Routes)


module.exports=server;