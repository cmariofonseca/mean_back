const Employee = require('../models/employee.model');
/* Se define una constante sobre la cual se implementará los diferentes
  métodos que seran usados para manipular los datos. */
const employeeCtrl = {};

employeeCtrl.createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json({ 'status': 'Employee saved' });
};

employeeCtrl.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeCtrl.editEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };
  await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
  res.json({ status: 'Employee update' });
};

employeeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: 'Employee deleted' });
};
 
/* Éste modulo nos permite exportar la constante que permite la manipulación
  de datos */
module.exports = employeeCtrl;
