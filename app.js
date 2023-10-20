import express from 'express';
import dotenv from 'dotenv';
import appUsuario from './app/usuario/aplicacion/usuario.routes.js';
import appCita from './app/cita/aplicacion/cita.routes.js';
import appMedico from './app/medico/aplicacion/medico.routes.js';
dotenv.config();

const app = express();
app.use(express.json());

const config = JSON.parse(process.env.SERVER);

app.use('/usuario', appUsuario);
app.use('/cita', appCita);
app.use('/medico',appMedico)

app.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`) 
});