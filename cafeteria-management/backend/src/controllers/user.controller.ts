import express from "express";
import User from "../model/User";

export class UserController {
    login = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;

        User.findOne({ 'korime': username, 'lozinka': password, 'tip': type },
            (err, user) => {
                if (err) console.log(err);
                else res.json(user);
            }
        )
    }
}