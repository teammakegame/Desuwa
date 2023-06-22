import mongoose, { Model, Mongoose } from "mongoose";
import Constant from "./constants";

export default async (schema: string) => {
    if (!Constant.Schema.All.includes(schema)) return;
    const Model = await import(`../connections/database/models/${schema.toLowerCase()}`);
    switch (schema) {
        case Constant.Schema.Category:
            
            break;
        case Constant.Schema.Member:
            break;    
    }
}