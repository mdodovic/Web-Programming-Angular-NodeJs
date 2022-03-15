import express from 'express';
import Additionals from '../models/additionals';
import MainProducts from '../models/mainProducts';

export class ProductsController {
    fetchAllMainProducts = (req: express.Request, res: express.Response) => {

        MainProducts.find({},
            (err, mainProduct) => {
                if (err) console.log(err);
                else res.json(mainProduct);
            })
    }


    fetchAllAdditionals = (req: express.Request, res: express.Response) => {

        Additionals.find({},
            (err, additionals) => {
                if (err) console.log(err);
                else res.json(additionals);
            })
    }
}