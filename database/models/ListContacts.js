
const {Model,DataTypes} = require('sequelize')
const sequelize = require('../db')

class ListContacts extends Model{}
ListContacts.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,

    correo: {
        type: DataTypes.STRING,
        validate:{
            isEmail:{
              args:true,
              msg: "Por favor ingresa un correo valido"

            }
        }
    },
   
    celular: DataTypes.STRING,

    direccion: DataTypes.STRING,

},{
    sequelize,
    modelName: "listcontacts",
    timestamps:false
    
})

module.exports = ListContacts;
