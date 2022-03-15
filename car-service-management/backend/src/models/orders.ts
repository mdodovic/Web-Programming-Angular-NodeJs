import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Orders = new Schema(
    {
        id: {
            type: Number
        },
        serviser: {
            type: String
        },
        naziv: {
            type: String
        },
        deo: {
            type: String
        },
        status: {
            type: String
        }
    }
);

export default mongoose.model('Orders', Orders, 'nalozi');