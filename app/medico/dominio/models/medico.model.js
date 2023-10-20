import { body } from "express-validator";

export const medicoDTO = [
    body('nombreCompleto')
        .notEmpty().withMessage('El nombreCompleto es obligatorio')
        .isString().withMessage('EL nombreCompleto debe ser de tipo string'),
    body('consultorio')
        .notEmpty().withMessage('El consultorio es obligatorio')
        .isString().withMessage('EL consultorio debe ser de tipo string'),
    body('especialidad')
        .notEmpty().withMessage('La especialidad es obligatorio')
        .isString().withMessage('La especialidad debe ser de tipo string')
]