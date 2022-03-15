import express from 'express';
import { UserController } from '../controllers/user.controller';

const cityRouter = express.Router();

cityRouter.route('/login').post(
    (req, res) => new UserController().login(req, res)
);


cityRouter.route('/payBills').post(
    (req, res) => new UserController().payBills(req, res)
);

export default cityRouter;

