/**
 * @fileoverview Modèle Mongoose pour les utilisateurs
 */

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  capturedPokemons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon',
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
