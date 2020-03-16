var user = require('./userDetailsRoute');
var dept = require('./deptRoute')
var catg = require('./catgRoute')

module.exports = [].concat(user,dept,catg);


















// const {sequelize}=require('./model')
// var user_details=sequelize.import('./models/user_details')
// //var category=sequelize.import('./models/category')


// exports.configureRoutes = (server) => {
//   // server.route accepts an object or an array
//   return server.route([
//       //{
// //     method: 'GET',
// //     path: '/category',
// //     handler: async() => {
// //         var result=[];
// //   await  category.sequelize.sync().then(async function() {
   
// //     console.log('hello')
// //     await category.findAll({}).then((res)=>{
// //          res.map((a)=>{
// //              result.push(a.dataValues)
// //          })
// //     })
// // })

// // return result; 
// //     }
// //   },
//   {
//     method: 'GET',
//     path: '/user_details',
//     handler: async() => {
//         var result=[];
//   await  user_details.sequelize.sync().then(async function() {
   
//     console.log('hello')
//     await user_details.findAll({}).then((res)=>{
//          res.map((a)=>{
//              result.push(a.dataValues)
//          })

//     })
// })

// return result; 
//     }
// }
//   ])


  
// }