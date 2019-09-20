
////////////////////////// Para iniciar la base de datos

/* 

const mongoose = require ('mongoose');
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(da => console.log('La base de datos está conectada') )
    .catch(err => console.error(err))

module.exports = mongoose;

*/

////////////////////////// 

const firebase = require("firebase");

require("firebase/firestore");

// Inicializar la base de datos
firebase.initializeApp({
    apiKey: 'AIzaSyByrt2TFLlqAc_YPFfT3Equd9w40RWYl6U',
    authDomain: 'login-50bf9.firebaseapp.com',
    projectId: 'login-50bf9'
  });
  
  var db = firebase.firestore();
  module.exports = db;
