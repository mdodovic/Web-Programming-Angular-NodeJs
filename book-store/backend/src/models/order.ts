import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Orders = new Schema(
    {
        idN: {
            type: Number
        },
        kupac: {
            type: Number
        },
        knjiga: {
            type: Number
        },
        kolicina: {
            type: Number
        },
        status: {
            type: String
        }
    }
);

export default mongoose.model('Orders', Orders, 'narudzbine');