// src/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";   // ← default import
import favoriteRoutes from "./routes/favoriteRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch(err => console.error("Erreur MongoDB :", err));

// Monte tes routes
app.use("/api/auth", authRoutes);
app.use("/api/pokemons", pokemonRoutes);
app.use("/api/favorites", favoriteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur sur http://localhost:${PORT}`));
