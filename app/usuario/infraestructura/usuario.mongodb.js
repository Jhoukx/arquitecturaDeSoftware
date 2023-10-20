import { con } from '../../../config/connection/atlas.js';

const db = await con();
const usuario = await db.collection('usuario');

export const getAllUsuarios = async () => {
    return await usuario.find().sort({ nombre: 1 }).toArray()
}