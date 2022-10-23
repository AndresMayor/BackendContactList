const User = require('./models/User')
const listcontacts = require('./models/ListContacts')

//Relacion uno a mucho en este caso un usuario va a tener muchos contactos 
//Añade la llave foranea a la lista de contactos
User.hasMany(listcontacts); 
listcontacts.belongsTo(User);