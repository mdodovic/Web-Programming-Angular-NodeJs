import express from 'express';
import { ProductsController } from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.route('/fetchAllMainProducts').get(
    (req, res) => new ProductsController().fetchAllMainProducts(req, res)
);

productsRouter.route('/fetchAllAdditionals').get(
    (req, res) => new ProductsController().fetchAllAdditionals(req, res)
);
export default productsRouter;