import * as mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        category: {
            type: String
        },
        status: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {timestamps: true}
).index({code: 1}, {unique: true});

export default mongoose.model('Category', categorySchema);