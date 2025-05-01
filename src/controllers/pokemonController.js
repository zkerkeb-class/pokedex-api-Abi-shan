import Pokemon from "../models/pokemon.js";

// Obtenir tous les Pokémons
export const getAllPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Obtenir un Pokémon par ID
export const getPokemonById = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);

        if (pokemon) {
            res.json(pokemon);
        } else {
            res.status(404).json({ message: "Pokémon non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};
