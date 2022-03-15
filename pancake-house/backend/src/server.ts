import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.route';
import productsRouter from './routes/products.route';
import ordersRouter from './routes/orders.route';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/palacinkarnica2021');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongo ok')
});

const router = express.Router();
router.use('/users', userRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));