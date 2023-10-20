import { getAllCitas } from "../infraestructura/cita.mongodb.js";

const getAll = async (req, res) => {
    try {
        let result = await getAllCitas();
        res.json(result);
    } catch (error) {
        res.status(404).json({ status: 404, message: 'Couldn´t find cita error' })
    }
}

const getPaciente = async (req, res) => {
    try {
        let result = await cita.find({ datosUsuario: Number(req.params.id) }).toArray();
        res.send(result)
    } catch (error) {
        res.status(404).json({ status: 404, message: 'Couldn´t find a cita from that usuario' })
    }
}

const getMedico = async (req, res) => {
    try {
        let result = await cita.aggregate([
            {
                $match: {
                    medico: Number(req.params.id)
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
        res.send(result)
    } catch (error) {
        res.status(404).json({ status: 404, message: 'Couldn´t find' })
    }
}
export { getAll, getPaciente, getMedico }