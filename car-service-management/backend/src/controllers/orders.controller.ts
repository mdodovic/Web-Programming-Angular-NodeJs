import express from 'express';
import Orders from '../models/orders';

export class OrdersController {
    fetchAllOrders = (req: express.Request, res: express.Response) => {
        Orders.find({}, (err, orders) => {
            //console.log(news);
            if (err) {
                console.log(err);
            } else {
                res.json(orders);
            }
        })
    }

    addOrder = (req: express.Request, res: express.Response) => {

        let order = new Orders(req.body);
        order.save().then(order => { res.json({ 'order added': 'ok' }) }).catch(err => { res.json(err) })

    }

    changeStatus = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let status = req.body.status;
        console.log(req.body);
        Orders.collection.updateOne({ 'id': id }, { $set: { 'status': status } });
        res.json({ 'status changed': 'ok' });
    }
}