import User from "../models/user.js";
import Pokemon from "../models/pokemon.js";

export const addFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { pokemonId } = req.body;

    if (!user.favorites.includes(pokemonId)) {
      user.favorites.push(pokemonId);
      await user.save();
    }

    res.status(200).json({ message: "Ajouté aux favoris" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { pokemonId } = req.body;

    user.favorites = user.favorites.filter(id => id.toString() !== pokemonId);
    await user.save();

    res.status(200).json({ message: "Retiré des favoris" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("favorites");
    res.status(200).json(user.favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
