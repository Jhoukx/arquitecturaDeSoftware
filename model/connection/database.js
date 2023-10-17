import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config('../');

export class Database {
    constructor() {
        //verifica si ya hay una instancia
        if (!Database.instance) {
            //Conexion a mongodb
            this.client = new MongoClient(process.env.MONGO_URI);
            //Se asegura de tener una sola instancia 
            Database.instance = this;
        }

        return Database.instance;
    }

    async connect() {
        if (!this.client.isConnected) {
            await this.client.connect();
        }
        return this.client.db();
    }
}

export const collectionGen = async (coleccion) => {
    const dbinstance = new Database();
    const db = await dbinstance.connect();
    const collectionData = db.collection(coleccion);
    return collectionData;
}

