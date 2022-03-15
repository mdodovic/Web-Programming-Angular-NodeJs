import mongoose from "mongoose";

const Schema = mongoose.Schema;

let City = new Schema(
    {
        grad: {
            type: String
        }
    }
);

export default mongoose.model("City", City, "grad");

