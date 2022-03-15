import express from 'express';
import User from '../models/user';

export class UserController {

    login = (req: express.Request, res: express.Response) => {

        let city = req.body.city;
        let address = req.body.address;
        let flatNumber = req.body.flatNumber;
        let pin = req.body.pin

        User.findOne({ 'grad': city, 'adresa': address, 'stan': flatNumber, 'pin': pin },
            (err, user) => {
                console.log(user);
                if (err) console.log(err);
                else res.json(user);
            })
    }

    payBills = (req: express.Request, res: express.Response) => {

        let id = req.body.id;
        let money = req.body.money;
        User.collection.updateOne({ 'id': id }, { $set: { 'novac': money } }
        )
        res.json({ 'user reduced': 'ok' });
    }

}
