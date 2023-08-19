import express from 'express';
import servicesRoutes from './routes/servicesRoutes.js'

import { db } from './data/db.js';

// Configurar App
const app = express();

// Conectar Db
db();

// Definir una ruta
app.use('/api/services', servicesRoutes)


// Definir puerto
const PORT = process.env.PORT || 4000;


// Arrancar la App
app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando correctamente en el puerto:', PORT)
})