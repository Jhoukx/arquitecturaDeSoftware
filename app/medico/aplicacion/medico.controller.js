import { getAllMedicos, getEspecialidadDelMedico } from "../infraestructura/medico.mongodb.js";

const getEspecialidad = async (req, res) => {
    if (!req.params.value) return res.status(404).json({ status: 404, message: 'Especialidad not found' })
    try {
        const especialidad = req.params.value;
        let result = await getEspecialidadDelMedico(especialidad);
        res.json(result);
    } catch (error) {
        res.status(404).json({status:404,message:'Especialidad not found'})
    }
}

export const getMedicos = async (req, res) => {
    try {
        const result = await getAllMedicos();
        res.json(result);
    } catch (error) {
        res.status(404).json({ status: 404, message: 'Medicos not found' })
    }
}

export {getEspecialidad}