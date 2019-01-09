const mongoose =  require('mongoose');
// Ésto nos permite modelar los datos dentro del servidor
const schema = mongoose.Schema;

const EmployeeSchema = new schema({
  name: String,
  position: String,
  office:String,
  salary: Number
});

// Ésto nos permite exportar el modelo de datos a almacenar
module.exports = mongoose.model('Employee', EmployeeSchema);
