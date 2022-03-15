import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Orders = new Schema(
    {
        idN: {
            type: Number
        },
        proizvod: {
            type: String
        },
        kupac: {
            type: String
        },
        dodaci: {
            type: Array
        },
        datum: {
            type: String
        },
        status: {
            type: String
        }
    }
);

export default mongoose.model('Orders', Orders, 'narudzbine');
