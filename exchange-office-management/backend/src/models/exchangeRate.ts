import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let ExchangeRate = new Schema({
    valuta: {
        type: String
    },
    sr_kurs: {
        type: Number
    },
    stanje: {
        type: Number
    }
});

export default mongoose.model('ExchangeRate', ExchangeRate, 'kurs');