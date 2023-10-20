import { con } from "../../../config/connection/atlas.js";

const db = await con();
const cita = db.collection('cita');

export const  getAllCitas =  async() => {
    return await cita.find().sort({ fecha: 1 }).toArray()
}