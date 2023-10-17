import {collectionGen} from "../model/connection/database.js";

const user = await collectionGen('User');

export const getAllusers = async (req, res) => {
    try {
        const allUsers = await user.find().toArray();
        res.json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}