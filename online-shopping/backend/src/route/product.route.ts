import express from 'express';
import { ProductController } from '../controller/protuct.controller';

const productRoute = express.Router();

productRoute.route('/fetchAllProducts').get(
    (req, res) => new ProductController().fetchAllProducts(req, res)
);

productRoute.route('/buyProduct').post(
    (req, res) => new ProductController().buyProduct(req, res)
);

productRoute.route('/addComment').post(
    (req, res) => new ProductController().addComment(req, res)
);

productRoute.route('/incrementProductNumber').post(
    (req, res) => new ProductController().incrementProductNumber(req, res)
);
productRoute.route('/decrementProductNumber').post(
    (req, res) => new ProductController().decrementProductNumber(req, res)
);

export default productRoute;

