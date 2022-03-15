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
        tip: {
            type: String
        }

    }
);

export default mongoose.model('User', User, 'korisnici');