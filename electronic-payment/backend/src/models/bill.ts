import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Bill = new Schema(
    {
        id: {
            type: Number
        },
        tip: {
            type: String
        },
        korisnik: {
            type: Number
        },
        mesec: {
            type: String
        },
        iznos: {
            type: Number
        },
        placen: {
            type: Boolean
        }
    }
);

export default mongoose.model("Bill", Bill, "racun");

