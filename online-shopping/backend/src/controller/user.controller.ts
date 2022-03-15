import express from 'express';
import User from '../model/user';

export class UserController {

    login = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        User.findOne({ 'kor_ime': username, 'lozinka': password },
            (err, user) => {
                console.log(user)
                if (err) console.log(err);
                else res.json(user);
            }
        )
    }

    buyProduct = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let product = req.body.product;
        console.log("BUY PRODUCT!")
        console.log(username)
        console.log(product)
        User.collection.updateOne({ 'kor_ime': username },
            { $push: { 'proizvodi': product } }, function (err, data) {
                if (err) res.json(err);
                else res.json(data);
            }
        )
    }

}