import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Inscription
router.post("/register", registerUser);

// Connexion
router.post("/login", loginUser);

export default router;
