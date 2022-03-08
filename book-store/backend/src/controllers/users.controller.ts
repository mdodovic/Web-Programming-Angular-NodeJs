import express from 'express';
import User from '../models/user';

export class UserController {
    login = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;
        console.log(username);
        console.log(password)
        console.log(type)

        User.findOne({ 'korime': username, 'lozinka': password, 'tip': type },
            (err, user) => {
                console.log("Dohvacen");
                console.log(user);
                if (err) console.log(err);
                else res.json(user);
            })
    }

    fetchAllUsers = (req: express.Request, res: express.Response) => {
        User.find({}, (err, users) => {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        })
    }
}