const { sequelize } = require('../controller/db')
var user_details = sequelize.import('../models/user_details')
var userDetailsController = require('../controller/useDetailsController')
var verifyToken = require('../schemas/verifyToken');
var createToken = require('../utils/token')
module.exports = [

    {
        method: 'GET',
        path: '/userdetails',
        config: {
            pre: [{ method: verifyToken, assign: 'tokenresult' }],
            handler: userDetailsController.getUserDetails.handler
        }
    },

    {
        method: 'GET',
        path: '/userdetails/{id}',
        config: {
            pre: [{ method: verifyToken, assign: 'tokenresult' }],
        handler: userDetailsController.getUserDetailsById.handler
    }
},

    {
        method: 'POST',
        path: '/userdetails/create',
        config: userDetailsController.createUser
    },

    {
        method: 'DELETE',
        path: '/userdetails/delete',
        config: userDetailsController.deleteUser
    },
    {
        method: 'POST',
        path: '/login',


        config: {
            pre: [{ method: verifyToken }],

            handler: async (request, reply) => {
                var result = { tokenId: '' };
                var user = {
                    name: '',
                    password: '',
                    email: ''

                }
                // console.log('herer')
                //console.log(request.pre)
                await user_details.sequelize.sync().then(async function () {


                    await user_details.findOne({ where: { name: request.payload.name, password: request.payload.password } }).then((res) => {

                        user.name = res.dataValues.name;
                        user.password = res.dataValues.password;
                        user.email = res.dataValues.email;

                        console.log(user)


                        result.tokenId = createToken(user);

                    })


                })


                return result
            }
        }
    }



]










