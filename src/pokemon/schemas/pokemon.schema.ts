import{ Schema } from 'mongoose';

export const PokemonSchema = new Schema ({
    name: {type: String, required: true},
    type: String,
    generation: Number,
    characteristics: String,
    imageURL: String,
    createDate: {
        type:Date,
        default: Date.now
    }
});