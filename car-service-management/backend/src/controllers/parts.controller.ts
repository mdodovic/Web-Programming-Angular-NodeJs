import express from 'express';
import Parts from '../models/parts';

export class PartsController {
    fetchAllParts = (req: express.Request, res: express.Response) => {
        Parts.find({}, (err, parts) => {
            //console.log(news);
            if (err) {
                console.log(err);
            } else {
                res.json(parts);
            }
        })
    }

    addPart = (req: express.Request, res: express.Response) => {

        let part = new Parts(req.body);
        part.save().then(part => { res.json({ 'part added': 'ok' }) }).catch(err => { res.json(err) })

    }
    addPartAmount = (req: express.Request, res: express.Response) => {
        let partName = req.body.naziv;
        console.log(req.body);
        Parts.collection.updateOne({ 'naziv': partName }, { $inc: { 'stanje': 5 } });
        res.json({ 'status changed': 'ok' });
    }
}