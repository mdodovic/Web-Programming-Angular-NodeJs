import express from 'express';
import { ExchangeRateController } from '../controller/exchangeRate.controller';
const exchangeRateRouter = express.Router();

exchangeRateRouter.route('/fetchAllExchangeRates').get(
    (req, res) => new ExchangeRateController().fetchAllExchangeRates(req, res)
);

exchangeRateRouter.route('/setMoney').post(
    (req, res) => new ExchangeRateController().setMoney(req, res)
);

export default exchangeRateRouter;