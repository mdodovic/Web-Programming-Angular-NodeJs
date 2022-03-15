import express from "express";
import Additions from "../model/additions";
import Coffee from "../model/coffee";

export class CoffeeController {
    findCoffeeByName = (req: express.Request, res: express.Response) => {
        let namePattern = req.body.namePattern;

        Coffee.find({ 'naziv': { $regex: namePattern } },
            (err, coffees) => {
                if (err) console.log(err)
                else res.json(coffees)
            })
    }
    findCoffeeById = (req: express.Request, res: express.Response) => {
        let id = req.body.id;

        Coffee.findOne({ 'id': id },
            (err, coffees) => {
                if (err) console.log(err)
                else res.json(coffees)
            })
    }

    fetchAdditions = (req: express.Request, res: express.Response) => {
        Additions.find({},
            (err, additions) => {
                if (err) console.log(err)
                else res.json(additions)
            })
    }
}