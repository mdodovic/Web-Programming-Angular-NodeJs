import express from 'express';
import ExchangeRate from '../models/exchangeRate';

export class ExchangeRateController {
    fetchAllExchangeRates = (req: express.Request, res: express.Response) => {
        ExchangeRate.find({},
            (err, exr) => {
                if (err) console.log(err);
                else res.json(exr);
            })
    }
    setMoney = (req: express.Request, res: express.Response) => {
        let exchangeRate = req.body.exchangeRate;
        let newMoney = req.body.newMoney;
        ExchangeRate.collection.updateOne({ 'valuta': exchangeRate },
            { $set: { 'stanje': newMoney } });
        res.json({ 'message': 'ok' });
    }
}