import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute';
import exchangeRateRouter from './routes/exchangeRateRoute';
import transactionRouter from './routes/transactionRouter';


const app = express();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/menjacnica2021');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongo ok')
});

const router = express.Router();
router.use('/users', userRouter);
router.use('/rates', exchangeRateRouter);
router.use('/transactions', transactionRouter);



app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));