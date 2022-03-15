import express from 'express';
import Orders from '../models/orders';


export class OrdersController {
    fetchAllOrders = (req: express.Request, res: express.Response) => {

        Orders.find({},
            (err, orders) => {
                if (err) console.log(err);
                else res.json(orders);
            })
    }

    finishOrder = (req: express.Request, res: express.Response) => {

        let order = new Orders(req.body);

        order.save().then((order) => {
            res.json({ 'message': 'ok' });
        }).catch((err) => { res.json({ 'message': err }); });


    }

    fetchAllOrdersByUser = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        Orders.find({ 'kupac': username },
            (err, orders) => {
                if (err) console.log(err);
                else res.json(orders);
            })
    }


    acceptOrder = (req: express.Request, res: express.Response) => {

        let idN = req.body.idN;

        Orders.collection.updateOne({ 'idN': idN }, { $set: { 'status': 'Prihvaceno' } })
        res.json({ 'message': 'ok' });
    }

    refuseOrder = (req: express.Request, res: express.Response) => {

        let idN = req.body.idN;

        Orders.collection.updateOne({ 'idN': idN }, { $set: { 'status': 'Odbijeno' } })
        res.json({ 'message': 'ok' });
    }


}