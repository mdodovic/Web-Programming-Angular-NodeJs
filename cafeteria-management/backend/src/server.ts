import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.routers';
import coffeeRouter from './routes/coffee.routes';
import orderRouter from './routes/order.routes';



const app = express();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/kupacNarudzbine');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongo ok')
});


const router = express.Router();
router.use('/users', userRouter);
router.use('/coffee', coffeeRouter);
router.use('/order', orderRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));