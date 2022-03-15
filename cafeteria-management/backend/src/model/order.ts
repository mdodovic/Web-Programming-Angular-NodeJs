import mongoose from "mongoose";


const Schema = mongoose.Schema;

let Order = new Schema(
    {
        id: {
            type: Number
        },
        aktivna: {
            type: Boolean
        },
        narucio: {
            type: String
        },
        datum: {
            type: String
        },
        stavke: {
            type: Array
        }
    }

);

export default mongoose.model("Order", Order, "narudzbine");