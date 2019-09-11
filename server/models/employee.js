const mongoose = require('mongoose');
const {Schema} = mongoose;


//Se modelan los datos de los empleados, solo es la forma en la que van a aparecer los datos
const EmployeeSchema = new Schema({
    Nombre: {type: String, required: true},
    Puesto: {type: String, required: true},
    Oficina:{type: String, required: true},
    Salario:{type: Number, required: true}
});

//Se transforma en un modelo de datos de mongoose
//                              Nombre en BD   Esquema que utiliza
module.exports= mongoose.model('Employee', EmployeeSchema);