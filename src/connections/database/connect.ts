import * as mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();

export default async () => {
    try {
        await mongoose.connect(process.env.DB_URI as string);
        console.log('Connect to database successfully');
    } catch (err) {
        console.log('Failed to connect to database');
        process.exit(1)
    }
}