
const { sequelize } = require('./db')
var category=sequelize.import('../models/category')


getCategoryDetails = {
    handler: async () => {
        var result = [];
        await category.sequelize.sync().then(async function () {

            await category.findAll({}).then((res) => {
                console.log(res);
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })
        return result;
    }
}


createCategory = {
    handler: async (request, reply) => {
        var result;
        await category.sequelize.sync().then(async function () {
            await category.create({ name: request.payload.name}).then((res) => {
                console.log(res)
                result = { statusCode: 200 }

            }).catch(err => {
                result = { statusCode: 400 }
            })
        })

        return result;
    }
}

deleteCategory = {
    handler: async (request, reply) => {
        var result;
        console.log(request.payload.name)
        await category.sequelize.sync().then(async function () {
            await category.destroy({ where: { name: request.payload.name } }).then((res) => {
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
    getCategoryDetails,
    createCategory,
    deleteCategory
}