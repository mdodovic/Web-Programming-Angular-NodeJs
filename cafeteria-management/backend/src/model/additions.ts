import mongoose from "mongoose";


const Schema = mongoose.Schema;

let Additions = new Schema(
    {
        id: {
            type: Number
        },
        naziv: {
            type: String
        },
        cena: {
            type: Number
        }
    }
);


export default mongoose.model("Additions", Additions, "dodaci");