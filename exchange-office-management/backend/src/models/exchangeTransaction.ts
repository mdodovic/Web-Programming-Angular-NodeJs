import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let ExchangeTransaction = new Schema({

    idT: {
        type: Number
    },
    kupac: {
        type: String
    },
    za_konverziju: {
        type: Number
    },
    trenutna_valuta: {
        type: String
    },
    zeljena_valuta: {
        type: String
    },
    posle_konverzije: {
        type: Number
    },
    status: {
        type: String
    }
});

export default mongoose.model('ExchangeTransaction', ExchangeTransaction, 'transakcije');