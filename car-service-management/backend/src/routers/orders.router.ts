import express from 'express';
import { OrdersController } from '../controllers/orders.controller';
const ordersRouter = express.Router();

ordersRouter.route('/fetchAllOrders').get(
    (req, res) => new OrdersController().fetchAllOrders(req, res)
);
ordersRouter.route('/addOrder').post(
    (req, res) => new OrdersController().addOrder(req, res)
);

ordersRouter.route('/changeStatus').post(
    (req, res) => new OrdersController().changeStatus(req, res)
);


export default ordersRouter;