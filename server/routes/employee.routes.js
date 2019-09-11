const express = require('express');
const router = express.Router();
const employeeCTRL = require('../controllers/employee.controller');


router.get('/',employeeCTRL.getEmployees);              //get: obtener datos
router.post('/', employeeCTRL.createEmployee);          //post: guardar datos
router.get('/:id', employeeCTRL.getEmployee);
router.put('/:id', employeeCTRL.editEmployee);          //put: editar datos
router.delete('/:id', employeeCTRL.deleteEmployee);     //delete: eliminar datos

module.exports = router;