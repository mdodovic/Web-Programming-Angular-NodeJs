import express from 'express';
import { PartsController } from '../controllers/parts.controller';
const partsRouter = express.Router();

partsRouter.route('/fetchAllParts').get(
    (req, res) => new PartsController().fetchAllParts(req, res)
);

partsRouter.route('/addPart').post(
    (req, res) => new PartsController().addPart(req, res)
);


partsRouter.route('/addPartAmount').post(
    (req, res) => new PartsController().addPartAmount(req, res)
);




export default partsRouter;