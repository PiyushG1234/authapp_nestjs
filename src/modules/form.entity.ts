import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Form extends Document {
    @Prop()
    name:string;
    @Prop()
    email:string;
    @Prop()
    phone:number;
}

export const FormSchema = SchemaFactory.createForClass(Form);