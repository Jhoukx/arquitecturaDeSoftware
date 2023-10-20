import { con } from "../../../config/connection/atlas.js";

const db = await con();
const cita = db.collection('cita');

export const  getAllCitas =  async() => {
    return await cita.find().sort({ fecha: 1 }).toArray()
}

export const getCitasDelPaciente = async (id) => {
    return await cita.aggregate([
        {
            $match: {
                datosUsuario: Number(id)
            }
        }
    ]).toArray();
}

export const getPacientesDeMedico = async (id) => {
    return await cita.aggregate([
        {
            $match: {
                medico: Number(id)
            }
        },
        {
            $lookup: {
                from: 'usuario',
                localField: 'medico',
                foreignField: 'id',
                as: 'Pacientes'
            }
        },
        {
            $unwind: '$Pacientes'
        },
        {
            $project: {
                ID: '$id',
                FECHA: '$fecha',
                ESTADO: '$estado',
                MEDICO: '$medico',
                DATOSUSUARIO: '$datosUsuario',
                PACIENTES: {
                    ID: '$Pacientes.id',
                    NOMBRE: '$Pacientes.nombre',
                    PRIMER_APELLIDO: '$Pacientes.primer_apellido',
                    SEGUNDO_APELLIDO: '$Pacientes.segundo_apellido',
                    TELEFONO: '$Pacientes.telefono',
                    DIRECCION: '$Pacientes.direccion',
                    EMAIL: '$Pacientes.email',
                    TIPODOC: '$Pacientes.tipodoc',
                    GENERO: '$Pacientes.genero',
                    ACUDIENTE: '$Pacientes.acudiente'
                }
            }
        }
    ]).toArray()
}