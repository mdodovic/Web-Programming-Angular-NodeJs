import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Product = new Schema(
    {
        naziv: {
            type: String
        },
        kolicina: {
            type: Number
        },
        proizvodi: {
            type: Array
        }
    }
);

export default mongoose.model('Product', Product, 'products');
