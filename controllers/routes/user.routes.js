import { Router} from 'express';
import { getAllusers } from '../user.controller.js';

const appUser = Router();

appUser.get('/', getAllusers);

export default appUser;