/**
 * (1) pm i mongoose *Éste modulo nos sirve para conectarnos con la base
 *     de datos y támbien nos sirve para modelar los datos.
 * (2) Para inicializar éste modulo necesitamos el comando: sudo service mongod start.
 * 
**/

// Se define una constante para la conexión y creación de la base de datos.
const mongoose = require('mongoose');
// se define url desde donde se podrá acceder a la base de datos.
const URL = 'mongodb://localhost/back';

// 
mongoose.connect(URL, { useNewUrlParser: true }).then(db => {
  console.log('db is connected');
}).catch(error => {
  console.error(error);
});

// Exportamos éste modulo para que pueda ser usado desde otros archivos.
module.exports = mongoose;
