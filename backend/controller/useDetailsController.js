const { sequelize } = require('./db')
var user_details = sequelize.import('../models/user_details')
//var department=sequelize.import('../models/department')


getUserDetails = {
    handler: async () => {
        var result = [];
        await user_details.sequelize.sync().then(async function () {

            await user_details.findAll({}).then((res) => {
                console.log(res);
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })
        return result;
    }
}

getUserDetailsById = {
    handler: async (request, reply) => {
        var result = [];
        await user_details.sequelize.sync().then(async function () {
            //console.log(request.params.id)
            //console.log('hello')
            await user_details.findAll({ where: { id: request.params.id } }).then((res) => {
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })

        return result;
    }
}


createUser = {
    handler: async (request, reply) => {
        var result;
        await user_details.sequelize.sync().then(async function () {
            await user_details.create({ name: request.payload.name, password: request.payload.password, email: request.payload.email }).then((res) => {
                console.log(res)
                result = { statusCode: 200 }

            }).catch(err => {
                result = { statusCode: 400 }
            })
        })

        return result;
    }
}

deleteUser = {
    handler: async (request, reply) => {
        var result;
        console.log(request.payload.name)
        await user_details.sequelize.sync().then(async function () {
            await user_details.destroy({ where: { name: request.payload.name } }).then((res) => {
                console.log(res)
                result = { statusCode: 200 }

            }).catch(err => {
                result = { statusCode: 400 }
            })
        })

        return result;
    }
}

deleteUser = {
    handler: async (request, reply) => {
        var result;
        console.log(request.payload.name)
        await user_details.sequelize.sync().then(async function () {
            await user_details.destroy({ where: { name: request.payload.name } }).then((res) => {
                console.log(res)
                result = { statusCode: 200 }

            }).catch(err => {
                result = { statusCode: 400 }
            })
        })
        return result;
    }
}

// getDeptDetails = {
//     handler: async () => {
//         var result = [];
//         await department.sequelize.sync().then(async function () {

//             await department.findAll({}).then((res) => {
//                 console.log(res);
//                 res.map((a) => {
//                     result.push(a.dataValues)
//                 })

//             })
//         })
//         return result;
//     }
// }


module.exports = {
    getUserDetails,
    getUserDetailsById,
    createUser,
    deleteUser,
   // getDeptDetails
}