import { con } from '../../../config/connection/atlas.js';

const db = await con();
const cita = db.collection('medico');

export const getEspecialidadDelMedico = async (especialidad) => {
    return await cita.aggregate([
        {
            $match: {
              especialidad: especialidad
            }
        }
    ]).toArray()
}

export const getAllMedicos = async () => {
    return await cita.find().sort({ fecha: 1 }).toArray();
}