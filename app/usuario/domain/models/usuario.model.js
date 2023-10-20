import { body } from "express-validator";

export const usuarioDTO = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser de tipo string'),

    body('segundo_nombre')
        .optional()
        .isString().withMessage('El segundo_nombre debe ser de tipo string'),

    body('primer_apellido')
        .notEmpty().withMessage('El primer_apellido es obligatorio')
        .isString().withMessage('El primer_apellido debe ser de tipo string'),

    body('segundo_apellido')
        .optional()
        .isString().withMessage('El segundo_apellido debe ser de tipo string'),

    body('telefono')
        .notEmpty().withMessage('El telefono es obligatorio')
        .isString().withMessage('El telefono debe ser de tipo string')
        .matches(/^[0-9]{10}$/).withMessage('El telefono debe tener 10 dígitos'),

    body('direccion')
        .notEmpty().withMessage('La direccion es obligatoria')
        .isString().withMessage('La direccion debe ser de tipo string'),

    body('email')
        .optional()
        .isString().withMessage('El email debe ser de tipo string')
        .isEmail().withMessage('El email debe tener un formato válido'),

    body('tipodoc')
        .notEmpty().withMessage('El tipodoc es obligatorio')
        .isString().withMessage('El tipodoc debe ser de tipo string')
        .isIn(["CC", "TI"]).withMessage('El tipodoc debe ser "CC" o "TI"'),

    body('genero')
        .optional()
        .isString().withMessage('El genero debe ser de tipo string'),

    body('acudiente')
        .optional()
        .isInt().withMessage('El acudiente debe ser un número entero')
];
