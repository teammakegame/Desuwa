import * as mongoose from "mongoose";
import Constant from "../../../configs/constants";

interface Category {
    name: String;
    parents?: mongoose.Schema.Types.ObjectId;
    status: Number;
}

const categorySchema = new mongoose.Schema<Category>({
        name: {
            type: String,
            required: true
        },
        parents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Constant.Schema.Category
        },
        status: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {timestamps: true}
);

export default mongoose.model<Category>(Constant.Schema.Category, categorySchema);