import express from 'express';
import ExchangeTransaction from '../models/exchangeTransaction';



export class TransactionController {
    saveTransaction = (req: express.Request, res: express.Response) => {

        console.log(req.body)
        ExchangeTransaction.find({},
            (err, writtenTr) => {
                if (err) console.log(err);
                else {
                    let exchgTran = new ExchangeTransaction(req.body);
                    exchgTran.save().then(tr => { res.json({ 'message': 'ok' }) }).catch(err => { res.json({ 'message': 'not ok' }) })
                }
            })
    }

    fetchAllTransactions = (req: express.Request, res: express.Response) => {
        ExchangeTransaction.find({},
            (err, ext) => {
                console.log(ext);
                if (err) console.log(err);
                else res.json(ext);
            })
    }

    setTransactionStatus = (req: express.Request, res: express.Response) => {
        let idT = req.body.idT;
        let status = req.body.status;
        ExchangeTransaction.collection.updateOne({ 'idT': idT },
            { $set: { 'status': status } });
        res.json({ 'message': 'ok' });
    }

}