import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema(
    {
        id: {
            type: Number
        },
        ime_prezime: {
            type: String
        },
        grad: {
            type: String
        },
        adresa: {
            type: String
        },
        stan: {
            type: Number
        },
        pin: {
            type: String
        },
        novac: {
            type: Number
        }

    }
);

export default mongoose.model("User", User, "korisnik");

