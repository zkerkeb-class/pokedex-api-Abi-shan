// src/routes/pokemonRoutes.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { protect } from "../middleware/authMiddleware.js";
import { getAllPokemons, getPokemonById } from "../controllers/pokemonController.js";
import Pokemon from "../models/pokemon.js";

const router = express.Router();

// Utiliser __dirname en module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route de seed pour insérer les 151 pokémons
router.post("/seed", async (req, res) => {
  try {
    const raw = fs.readFileSync(path.join(__dirname, "../data/pokemons.json"), "utf-8");
    const pokemonsRaw = JSON.parse(raw);

    const toInsert = pokemonsRaw.map(p => ({
      name: p.name.english,
      types: p.type,
      hp: p.base.HP,
      attack: p.base.Attack,
      defense: p.base.Defense,
      speed: p.base.Speed,
      image: `/assets/pokemons/${p.id}.png`  // 🔥 utilise le numéro pour construire le chemin
    }));

    await Pokemon.deleteMany({});
    const inserted = await Pokemon.insertMany(toInsert);

    res.status(200).json({ inserted: inserted.length });
  } catch (err) {
    console.error("Seed error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Routes classiques protégées
router.get("/", protect, getAllPokemons);
router.get("/:id", protect, getPokemonById);

// EXPORT DEFAULT !
export default router;
