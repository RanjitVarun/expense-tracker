//const {checkTable } = require('./model')
const {user}=require('./model')

exports.configureRoutes = (server) => {
  // server.route accepts an object or an array
  return server.route([{
    method: 'GET',
    path: '/check',
    handler: () => {
      return checkTable.findAll({ })
    }
  },
  {
    method: 'GET',
    path: '/user',
    handler: () => {
      return user.findAll({}) 
    }
}
  ])


  
}