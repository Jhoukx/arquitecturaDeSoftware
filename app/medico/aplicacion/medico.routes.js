import { Router } from "express";
import { getEspecialidad,getMedicos } from './medico.controller.js'

const appMedico = Router();

appMedico.get('/especialidad/:value', getEspecialidad);
appMedico.get('/', getMedicos);
export default appMedico;