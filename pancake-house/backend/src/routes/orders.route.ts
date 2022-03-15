import express from 'express';
import { OrdersController } from '../controllers/orders.controller';

const ordersRouter = express.Router();

ordersRouter.route('/fetchAllOrders').get(
    (req, res) => new OrdersController().fetchAllOrders(req, res)
);

ordersRouter.route('/finishOrder').post(
    (req, res) => new OrdersController().finishOrder(req, res)
);


ordersRouter.route('/fetchAllOrdersByUser').post(
    (req, res) => new OrdersController().fetchAllOrdersByUser(req, res)
);

ordersRouter.route('/fetchAllOrdersByUser').post(
    (req, res) => new OrdersController().fetchAllOrdersByUser(req, res)
);

ordersRouter.route('/refuseOrder').post(
    (req, res) => new OrdersController().refuseOrder(req, res)
);
ordersRouter.route('/acceptOrder').post(
    (req, res) => new OrdersController().acceptOrder(req, res)
);




export default ordersRouter;