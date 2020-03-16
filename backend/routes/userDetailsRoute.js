//const {sequelize}=require('./model')
//var user_details=sequelize.import('./models/user_details')
//var category=sequelize.import('./models/category')
var userDetailsController=require('../controller/useDetailsController')
module.exports=[
  // server.route accepts an object or an array

      //{
//     method: 'GET',
//     path: '/category',
//     handler: async() => {
//         var result=[];
//   await  category.sequelize.sync().then(async function() {
   
//     console.log('hello')
//     await category.findAll({}).then((res)=>{
//          res.map((a)=>{
//              result.push(a.dataValues)
//          })
//     })
// })

// return result; 
//     }
//   },
  {
    method: 'GET',
    path: '/userdetails', 
    config:userDetailsController.getUserDetails
},
{
    method: 'GET',
    path: '/userdetails/{id}', 
    config:userDetailsController.getUserDetailsById
}
,
{
    method: 'POST',
    path: '/userdetails/create', 
    config:userDetailsController.createUser
}
,
{
    method: 'DELETE',
    path: '/userdetails/delete', 
    config:userDetailsController.deleteUser
}

]







