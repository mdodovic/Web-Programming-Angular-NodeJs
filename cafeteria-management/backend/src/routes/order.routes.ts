import express from 'express';
import { OrderController } from '../controllers/order.controller';


const orderRouter = express.Router();

orderRouter.route('/addOrder').post(
    (req, res) => new OrderController().addOrder(req, res)
);

orderRouter.route('/fetchAllOrders').get(
    (req, res) => new OrderController().fetchAllOrders(req, res)
);

orderRouter.route('/finishOrder').post(
    (req, res) => new OrderController().finishOrder(req, res)
);

export default orderRouter;