import express from 'express';
import { BillController } from '../controllers/bill.controller';

const billRouter = express.Router();

billRouter.route('/fetchBillsByUser').post(
    (req, res) => new BillController().fetchBillsByUser(req, res)
);

billRouter.route('/payBill').post(
    (req, res) => new BillController().payBill(req, res)
);


export default billRouter;

