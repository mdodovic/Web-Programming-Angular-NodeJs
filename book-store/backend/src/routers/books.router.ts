import express from 'express';
import { BooksController } from '../controllers/books.controller';
const booksRouter = express.Router();

booksRouter.route('/fetchAllBooks').get(
    (req, res) => new BooksController().fetchAllBooks(req, res)
);

booksRouter.route('/updateNumber').post(
    (req, res) => new BooksController().updateNumber(req, res)
);


export default booksRouter;