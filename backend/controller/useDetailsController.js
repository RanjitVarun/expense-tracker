const { sequelize } = require('./db')
var user_details = sequelize.import('../models/user_details')
const bcrypt = require('bcryptjs');
const saltRounds = 10;


//var department=sequelize.import('../models/d')


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
        var hashpwd;
        console.log(request.payload.password)
        await user_details.sequelize.sync().then(async function () {
            bcrypt.genSalt(saltRounds, async function (err, salt) {
                if (err) {
                    throw err
                } else {
                    await bcrypt.hash(request.payload.password, salt, function (err, hash) {
                        if (err) {
                            throw err
                        } else {
                            console.log(hash);
                            hashpwd=hash;
                        }
                    })
                }
            })
            console.log(hashpwd)
            await user_details.create({ name: request.payload.name, password: hashpwd, email: request.payload.email }).then((res) => {
               

                result = { statusCode: 200 }

            }).catch(err => {
                //console.log(err);
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


module.exports = {
    getUserDetails,
    getUserDetailsById,
    createUser,
    deleteUser,

}