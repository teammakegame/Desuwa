import * as mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
        memberId: {
            type: String,
            required: true,
            trim: true
        },
        guildId: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: Number,
            required: true,
            default: 0
        },
        represented: {
            type: Number,
            default: 0
        },
        class: {
            type: Number,
            default: 0
        }
    },
    {timestamps: true}
).index({memberId: 1, guildId: 1}, {unique: true});

export default mongoose.model('Member', memberSchema);