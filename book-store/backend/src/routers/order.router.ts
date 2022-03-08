import express from 'express';
import { OrderController } from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.route('/fetchAllOrders').get(
    (req, res) => new OrderController().fetchAllOrders(req, res)
);

orderRouter.route('/saveOrder').post(
    (req, res) => new OrderController().saveOrder(req, res)
);

orderRouter.route('/updateStatus').post(
    (req, res) => new OrderController().updateStatus(req, res)
);



export default orderRouter;