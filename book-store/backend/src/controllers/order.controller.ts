import express from 'express';
import Order from '../models/order';

export class OrderController {

    fetchAllOrders = (req: express.Request, res: express.Response) => {
        Order.find({}, (err, orders) => {
            if (err) {
                console.log(err);
            } else {
                res.json(orders);
            }
        })
    }

    saveOrder = (req: express.Request, res: express.Response) => {
        let ord = new Order(req.body);
        console.log(req.body);
        ord.save().then((ord) => {
            res.json({ 'message': 'ok' });
        }).catch((err) => { res.json({ 'message': err }); });
    }

    updateStatus = (req: express.Request, res: express.Response) => {
        let id = req.body.idO;

        Order.collection.updateOne({ 'idN': id }, { $set: { 'status': 'Prihvaceno' } });
    }

}