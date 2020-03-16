
const { sequelize } = require('./db')
var department=sequelize.import('../models/department')


getDeptDetails = {
    handler: async () => {
        var result = [];
        await department.sequelize.sync().then(async function () {

            await department.findAll({}).then((res) => {
                console.log(res);
                res.map((a) => {
                    result.push(a.dataValues)
                })

            })
        })
        return result;
    }
}


module.exports = {
    getDeptDetails
}