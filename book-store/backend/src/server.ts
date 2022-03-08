import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import booksRouter from './routers/books.router';
import usersRouter from './routers/users.router';
import orderRouter from './routers/order.router';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/knjizara');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongo ok')
});

const router = express.Router();
//router.use('/users', userRouter);
//router.use('/news', newsRouter);
router.use('/books', booksRouter);
router.use('/users', usersRouter);
router.use('/orders', orderRouter);


app.use('/', router); app.listen(4000, () => console.log(`Express server running on port 4000`));