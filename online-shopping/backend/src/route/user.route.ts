import express from 'express';
import { UserController } from '../controller/user.controller';

const userRoute = express.Router();

userRoute.route('/login').post(
    (req, res) => new UserController().login(req, res)
);




export default userRoute;

