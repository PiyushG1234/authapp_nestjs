import { Schema } from "mongoose";
import { Document } from "mongoose";

export const FormSchema = new Schema({
    name: {type:String, required:true},
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: false },
    password: { type: String, required: false },
});

export interface IForm extends Document {
    name :string;
    email : string;
    phone?:number;
    password?:string;
    URL?: string;
    alinkColor?: string;
    
    
}