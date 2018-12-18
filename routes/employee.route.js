const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controller');

// se define el formato de ruta por el cual se enviará y obtendrá datos.
router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
// Cuando despues del slash se indica :id, esto informa que el método requiere id.
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

// Archivo exportable.
module.exports = router;
