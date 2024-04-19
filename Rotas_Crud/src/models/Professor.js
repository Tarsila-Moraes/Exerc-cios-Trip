const {DataTypes} = require ('sequelize')
const { connection } = require('../database/connection')

const Professor = connection.define('Professor', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disciplina: {
        type: DataTypes.STRING,
        allowNull: false
    },

    tableName: 'professores',
    timestamps: true
})

module.exports = Professor