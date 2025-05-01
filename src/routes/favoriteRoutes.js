import express from "express";
import { addFavorite, removeFavorite, getFavorites } from "../controllers/favoriteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addFavorite);
router.post("/remove", protect, removeFavorite);
router.get("/", protect, getFavorites);

export default router;
