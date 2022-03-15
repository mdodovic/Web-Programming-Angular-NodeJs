import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Additionals = new Schema(
    {
        naziv: {
            type: String
        }
    }
);

export default mongoose.model('Additionals', Additionals, 'dodaci');
