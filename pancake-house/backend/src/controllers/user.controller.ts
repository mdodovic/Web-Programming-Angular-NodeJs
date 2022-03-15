import express from 'express';
import User from '../models/user';

export class UserController {
    login = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;

        User.findOne({ 'kor_ime': username, 'lozinka': password, 'tip': type },
            (err, user) => {
                console.log(user);
                if (err) console.log(err);
                else res.json(user);
            })
    }

    fetchAllUsers = (req: express.Request, res: express.Response) => {
        User.find({},
            (err, users) => {
                if (err) console.log(err);
                else res.json(users);
            })
    }

}