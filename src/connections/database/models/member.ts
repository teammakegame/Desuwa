import * as mongoose from "mongoose";
import Constant from "../../../configs/constants";

interface Member {
    memberId: String;
    guildId: String;
    status: Number;
    represented?: Number;
    class?: Number;
}

const memberSchema = new mongoose.Schema<Member>({
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

export default mongoose.model<Member>(Constant.Schema.Member, memberSchema);