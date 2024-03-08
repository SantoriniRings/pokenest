import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Prop } from "@nestjs/mongoose";

@Schema()
export class Pokemon extends Document {

    //id a cargo de mongo
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon)
