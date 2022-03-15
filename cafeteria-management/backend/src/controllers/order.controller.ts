import express from 'express';
import Order from '../model/order';

export class OrderController {


    addOrder = (req: express.Request, res: express.Response) => {
        console.log(req.body)
        Order.find({},
            (err, order) => {
                if (err) console.log(err);
                else {
                    let id = order.length + 1;
                    let ord = new Order(req.body);
                    ord.id = id;
                    ord.save().then(ord => { res.json({ 'message': 'ok' }) }).catch(err => { res.json(err) })
                }
            })

    }

    fetchAllOrders = (req: express.Request, res: express.Response) => {
        Order.find({},
            (err, orders) => {
                if (err) console.log(err);
                else {
                    console.log(orders);
                    res.json(orders);
                }
            })

    }

    finishOrder = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        Order.updateOne({ id: id }, { $set: { aktivna: false } }, function (err, doc) {
            console.log(err)
            console.log(doc)
            if (err) {
                res.json(err);
            }
            else {
                res.json({ 'message': 'ok' });
            }
        })

    }
}