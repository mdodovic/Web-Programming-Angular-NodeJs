import express from 'express';
import { CoffeeController } from '../controllers/coffee.controller';

const coffeeRouter = express.Router();

coffeeRouter.route('/findCoffeeByName').post(
    (req, res) => new CoffeeController().findCoffeeByName(req, res)
);
coffeeRouter.route('/findCoffeeById').post(
    (req, res) => new CoffeeController().findCoffeeById(req, res)
);
coffeeRouter.route('/fetchAdditions').get(
    (req, res) => new CoffeeController().fetchAdditions(req, res)
);
export default coffeeRouter;