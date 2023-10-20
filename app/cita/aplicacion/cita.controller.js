import { getAllCitas, getCitasDelPaciente, getPacientesDeMedico } from "../infraestructura/cita.mongodb.js";

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
        let result = await getCitasDelPaciente(req.params.id);
        res.json(result)
    } catch (error) {
        res.status(404).json({ status: 404, message: 'Couldn´t find a cita from that usuario' })
    }
}

const getMedico = async (req, res) => {
    try {
        let result = await getPacientesDeMedico(req.params.id);
        res.send(result)
    } catch (error) {
        res.status(404).json({ status: 404, message: 'Couldn´t find' })
    }
}
export { getAll, getPaciente, getMedico }