import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Parts = new Schema(
    {
        naziv: {
            type: String
        },
        stanje: {
            type: Number
        }

    }
);

export default mongoose.model('Parts', Parts, 'delovi');