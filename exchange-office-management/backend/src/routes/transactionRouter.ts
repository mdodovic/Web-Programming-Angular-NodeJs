import express from 'express';
import { TransactionController } from '../controller/transactionController';
const transactionRouter = express.Router();

transactionRouter.route('/saveTransaction').post(
    (req, res) => new TransactionController().saveTransaction(req, res)
);

transactionRouter.route('/fetchAllTransactions').get(
    (req, res) => new TransactionController().fetchAllTransactions(req, res)
);

transactionRouter.route('/setTransactionStatus').post(
    (req, res) => new TransactionController().setTransactionStatus(req, res)
);

export default transactionRouter;