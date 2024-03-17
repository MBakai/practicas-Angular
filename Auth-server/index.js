const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');

require('dotenv').config()  

// crear el servidor/aplicacion express

const app = express();

// Coneccion a la base de datos
dbConnection()

// Directorio publico
app.use(express.static('public'));

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use(express.json());   

// Rutas
app.use('/api/auth', require('./routes/auth'))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});