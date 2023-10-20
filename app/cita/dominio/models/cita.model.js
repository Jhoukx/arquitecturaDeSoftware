import { body } from "express-validator";

export const citaDTO = [
    body('fecha')
        .notEmpty().withMessage('La fecha es obligatoria')
        .isString().withMessage('La fecha debe ser de tipo string'),
    body('estado')
        .notEmpty().withMessage('El estado es obligatorio')    
        .isString().withMessage('El estado debe ser de tipo string'),
    body('medico')
        .notEmpty().withMessage('El medico es obligatorio')  
        .isNumeric().withMessage('El medico debe ser de tipo entero'),
    body('datosUsuario')
        .notEmpty().withMessage('El datosUsuario es obligatorio')
        .isNumeric().withMessage('El datosUsuario debe ser de tipo entero')
]