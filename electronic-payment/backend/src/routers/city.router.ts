import express from 'express';
import { CityController } from '../controllers/city.controller';

const cityRouter = express.Router();

cityRouter.route('/fetchAllCities').get(
    (req, res) => new CityController().fetchAllCities(req, res)
);

export default cityRouter;