import express from 'express';
import User from '../model/user';
import Product from '../model/product';

export class ProductController {

    fetchAllProducts = (req: express.Request, res: express.Response) => {

        Product.find({},
            (err, products) => {
                console.log(products)
                if (err) console.log(err);
                else res.json(products);
            }
        )
    }

    buyProduct = (req: express.Request, res: express.Response) => {
        let productName = req.body.name;
        let username = req.body.username;
        Product.collection.updateOne({ "naziv": productName }, { $inc: { "kolicina": -1 } });
        // this is decrementing amount of product in db
        User.findOne({ "kor_ime": username, "proizvodi.naziv": productName },
            (err, product) => {
                if (err) console.log(err)
                else {
                    if (product) {
                        // this is incrementing amount of already bought product of user in db
                        User.collection.updateOne({ "kor_ime": username, "proizvodi.naziv": productName }, { $inc: { "proizvodi.$.kolicina": 1 } })
                    } else {
                        let newProduct = {
                            naziv: productName,
                            kolicina: 1
                        }
                        User.collection.updateOne({ "kor_ime": username }, { $push: { "proizvodi": newProduct } });
                    }
                    res.json({ "message": "OK" });
                }
            })
    }

    addComment = (req: express.Request, res: express.Response) => {
        let productName = req.body.product;
        const comment = {
            komentar: req.body.comment
        }
        Product.collection.updateOne({ "naziv": productName }, { $push: { "komentari": comment } });
    }


    incrementProductNumber = (req: express.Request, res: express.Response) => {
        let productName = req.body.name;

        Product.collection.updateOne({ "naziv": productName }, { $inc: { "kolicina": 1 } });
    }
    decrementProductNumber = (req: express.Request, res: express.Response) => {
        let productName = req.body.name;

        Product.collection.updateOne({ "naziv": productName }, { $inc: { "kolicina": -1 } });
    }
}
