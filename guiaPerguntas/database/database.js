const sequelize = require("sequelize")

const connection = new sequelize('guiaperguntas', 'root', 'thayanne', {
    host: 'localhost', 
    dialect: 'mysql'
})

module.exports = connection