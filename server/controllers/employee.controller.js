const Employee = require('../models/employee');

const employeeCTRL = {};

employeeCTRL.getEmployees= async (req,res) => {
        const employees = await Employee.find();
        res.json(employees);
    
} 

employeeCTRL.createEmployee= async (req,res) => {
        const employee = new Employee(req.body);
        await employee.save();
        res.json({
                'status':'Empleado guardado'
        });
};

employeeCTRL.getEmployee=async (req,res) => {
       
        const employee = await Employee.findById(req.params.id);

        res.json(employee);
};

employeeCTRL.editEmployee= async (req, res) =>{

        const {id} = req.params;
        const employee = {
                name: req.body.name,
                position: req.body.position,
                office: req.body.office,
                salary: req.body.salary
        };
        await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true})
        res.json({Starus: 'Empleado actualizado'});

};
employeeCTRL.deleteEmployee= async (req,res) => {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({status: 'Empleado eliminado'});
};

module.exports = employeeCTRL;