import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stats: {
        hp: Number,
        attack: Number,
        defense: Number,
        speed: Number
    }
}, { timestamps: true });

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
