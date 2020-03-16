const path = require('path')
const Sequelize = require('sequelize')
// configure connection to db host, user, pass - not required for SQLite
const sequelize = new Sequelize('test', 'root', 'aspire', {
  dialect: 'mysql',
  define: {
    timestamps: false
}
 
})
var models = sequelize.import('./models/cat');


// Here we define our Article model with a title attribute of type string, and a body attribute of type text. By default, all tables get columns for id, createdAt, updatedAt as well.
// const checkTable = sequelize.define('checktable', {
//     firstName: {
//         type: Sequelize.STRING,
//         field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//       },
//       lastName: {
//         type: Sequelize.STRING
//       }
//     },{
//     freezeTableName: true 
//   })

models.sequelize.sync().then(function() {
    /**
     * Listen on provided port, on all network interfaces.
     */
    models.findAll({}).then((res)=>{
        console.log(res)
    })
});


//user.sync()

//module.exports = {user}