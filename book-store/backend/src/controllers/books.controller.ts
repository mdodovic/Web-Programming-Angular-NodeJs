import express from 'express';
import Books from '../models/books';

export class BooksController {

    fetchAllBooks = (req: express.Request, res: express.Response) => {
        Books.find({}, (err, books) => {
            if (err) {
                console.log(err);
            } else {
                console.log(books);
                res.json(books);
            }
        })
    }
    updateNumber = (req: express.Request, res: express.Response) => {
        let id = req.body.idB;
        let newAmount = req.body.amount;
        console.log(req.body);
        Books.collection.updateOne({ 'idK': id }, { $set: { 'naStanju': newAmount } });

        res.json({ 'message': 'updated amount' });
    }




}

