const {DataTypes, Sequelize} = require('sequelize')
const { connection } = require('../database/connection')

const Usuario = connection.define('Usuario', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
      },
      data_nascimento: {
        type: DataTypes.DATE
      },
      celular: {
        type: DataTypes.STRING,
      },
      tipo: {
      type: DataTypes.STRING
  }
})

module.exports = Usuario