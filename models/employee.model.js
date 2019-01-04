const mongoose =  require('mongoose');
// Ésto nos permite modelar los datos dentro del servidor
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: { type: String, required: true},
  position: { type: String, required: true},
  office: {type: String, required: true},
  salary: { type: Number, required: true}
});

// Ésto nos permite exportar el modelo de datos a almacenar
module.exports = mongoose.model('Employee', EmployeeSchema);
