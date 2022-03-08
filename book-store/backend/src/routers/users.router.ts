import express from 'express';
import { UserController } from '../controllers/users.controller';

const usersRouter = express.Router();

usersRouter.route('/login').post(
    (req, res) => new UserController().login(req, res)
);

usersRouter.route('/fetchAllUsers').get(
    (req, res) => new UserController().fetchAllUsers(req, res)
);


export default usersRouter;