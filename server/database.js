
////////////////////////// Para iniciar la base de datos
const mongoose = require ('mongoose');
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(da => console.log('La base de datos está conectada') )
    .catch(err => console.error(err))

module.exports = mongoose;
////////////////////////// 