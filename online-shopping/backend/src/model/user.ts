import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        kor_ime: {
            type: String
        },
        lozinka: {
            type: String
        },
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        mejl: {
            type: String
        },
        tip: {
            type: String
        },
        proizvodi: {
            type: Array
        }
    }
);

export default mongoose.model('User', User, 'users');