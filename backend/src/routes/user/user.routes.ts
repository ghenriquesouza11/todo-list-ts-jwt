import express from 'express';
import userControllers from '../../controllers/user.controllers';

const userRoutes = express.Router();

userRoutes.post('/register', userControllers.createUser);

export default userRoutes;
