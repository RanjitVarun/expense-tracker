const { sequelize } = require('./db')
var user_details = sequelize.import('../models/user_details')
const bcrypt = require('bcrypt');
const saltRounds = 10;


getUserDetails = {
    handler: async (request,reply) => {
        var result = [];
        if(request.pre.tokenresult.auth){
            await user_details.sequelize.sync().then(async function () {
                            await user_details.findAll({}).then((res) => {
                                //console.log(res);
                                res.map((a) => {
                                    result.push(a.dataValues)
                                })
                
                            })
                        })
        }
        else{
            result.push({statusCode:404,msg:'cannot access user details'})
        }

return result
}
}

getUserDetailsById = {
    handler: async (request, reply) => {
        var result = [];
        if(request.pre.tokenresult.auth){
        await user_details.sequelize.sync().then(async function () {
            await user_details.findAll({ where: { id: request.params.id } }).then((res) => {
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })}
        else{
            result.push({statusCode:404,msg:'cannot access user details'})
        }
        return result;
    }
}


createUser = {
    handler: async (request, reply) => {
        var result;
       
        //console.log(request.payload.password)
        await user_details.sequelize.sync().then(async function () {
            await bcrypt.genSalt(saltRounds, function(err, salt) {
              bcrypt.hash(request.payload.password, salt, async function(err, hash) {
                    // Store hash in your password DB.
                    await user_details.create({ name: request.payload.name, password: hash, email: request.payload.email }).then((res) => {
               
//console.log(res)
                        result = { res}
        
                    }).catch(err => {
    // console.log(err)                
                        result={err}
                    })
                });
            });
             
             
        })
console.log('first')
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


// loginUser = {
//     handler: async (request, reply) => {
//         var result = {tokenId:''};
//         var user={
//             name:'',
//             password:'',
//             email:''
//         }
//         await user_details.sequelize.sync().then(async function () {
     
           
//                  await user_details.findOne({ where: { name: request.payload.name, password:request.payload.password } }).then((res) => {
         
//                     user.name=res.dataValues.name;
//                     user.password=res.dataValues.password;
//                     user.email=res.dataValues.email;
//       console.log(user)
  
//                 //     bcrypt.compare(request.payload.password, hash=user.password, function(err, result) {
//                 //         // result == true
//                 //   //  });
//                 //    console.log('happening')
//                 //    console.log(result);
//                   //  })

//                   result.tokenId=createToken(user);
                  
//                   })
         
           
//         })
       
       
//       return result
//     }
// }


module.exports = {
    getUserDetails,
    getUserDetailsById,
    createUser,
    deleteUser,
   //loginUser

}


