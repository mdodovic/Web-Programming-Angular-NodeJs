import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Users = new Schema(
    {
        idK: {
            type: Number
        },
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        korime: {
            type: String
        },
        lozinka: {
            type: String
        },
        tip: {
            type: String
        }
    }
);

export default mongoose.model('Users', Users, 'korisnici');