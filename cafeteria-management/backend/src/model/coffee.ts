import mongoose from "mongoose";


const Schema = mongoose.Schema;

let Coffee = new Schema(
    {
        id: {
            type: Number
        },
        naziv: {
            type: String
        },
        cene: {
            type: Array
        }
    }
);


export default mongoose.model("Coffee", Coffee, "kafe");