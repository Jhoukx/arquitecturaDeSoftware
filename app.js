import express from 'express'
import dotenv from 'dotenv';
import appUser from './controllers/routes/user.routes.js';
dotenv.config();

const server = express();

server.use('/user', appUser);


const url = JSON.parse(process.env.SERVER);

server.listen(url, () => {
    console.log(`Server listening on http://${url.hostname}:${url.port}`);
})

