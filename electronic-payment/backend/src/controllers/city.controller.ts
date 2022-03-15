import express from 'express';
import City from '../models/city';


export class CityController {

    fetchAllCities = (req: express.Request, res: express.Response) => {
        City.find({},
            (err, cities) => {
                if (err) console.log(err);
                else {
                    res.json(cities);
                }
            })

    }
}