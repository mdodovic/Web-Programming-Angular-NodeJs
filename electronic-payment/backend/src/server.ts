import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cityRouter from './routers/city.router';
import userRouter from './routers/user.router';
import billRouter from './routers/bill.router';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/banka');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongo ok')
});


const router = express.Router();
router.use('/users', userRouter);
router.use('/city', cityRouter);
router.use('/bill', billRouter);

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));