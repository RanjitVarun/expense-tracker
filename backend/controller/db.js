const Sequelize = require('sequelize')

const sequelize = new Sequelize('expense', 'root', 'aspire', {
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

module.exports = { sequelize }
