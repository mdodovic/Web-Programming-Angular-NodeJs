import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let MainProduct = new Schema(
    {
        naziv: {
            type: String
        }
    }
);

export default mongoose.model('MainProduct', MainProduct, 'proizvodi');
