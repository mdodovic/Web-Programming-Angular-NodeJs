import express from 'express';
import Bill from '../models/bill';

export class BillController {

    fetchBillsByUser = (req: express.Request, res: express.Response) => {

        let userId = req.body.userId;
        Bill.find({ 'korisnik': userId },
            (err, bills) => {
                if (err) console.log(err);
                else res.json(bills);
            })
    }

    payBill = (req: express.Request, res: express.Response) => {

        let id = req.body.id;
        console.log(req.body);
        Bill.collection.updateOne({ 'id': id }, { $set: { 'placen': true } }
        )
        res.json({ 'payBill': 'ok' });
    }


}