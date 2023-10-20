import { Router } from "express";
import { getEspecialidad } from './medico.controller.js'

const appMedico = Router();

appMedico.get('/', getEspecialidad);

export default appMedico;