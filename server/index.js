//////////////////////////////////////////////////////////
//Esta parte es para iniciar el servidor
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

const {mongoose}= require('./database');

//Configuraciones
//Se asigna el puerto, pregunta al SO si se le asigna un puerto o en su defecto se utiliza el 3000
app.set('port', process.env.PORT || 3000 );

//Moddlewares
//npm install morgan para que el servidor nos "hable"
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: '*'}));
//Configuracion de cors
app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin,'
+ 'X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
res.header('Access-Control-Allow-Methods', 'GET , POST , OPTIONS, PUT, DELETE');
res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
next();
});




//Routers
//Se agrega '/api/employees' para que todas las rutas tengan el mismo inicio
app.use('/api/employees',require('./routes/employee.routes'));


//El servidor se inicia 
app.listen(app.get('port'), () => {
    console.log('Server en el puerto: ' + app.get('port')  );
});
// npm install nodemon -D y meter un script en en package.json para que
//el servidor se reinicie cada que los cambios se guarden
//////////////////////////////////////////////////////////