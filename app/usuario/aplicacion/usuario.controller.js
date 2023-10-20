import { getAllUsuarios } from "../infraestructura/usuario.mongodb";


const getAll = async (req, res) => {
    try {
        const result = await getAllUsuarios()
        res.json(result);
        
    } catch (error) {
        res.status(404).json({status:404,message:"Data was not found"})
    }
}

export {getAll}