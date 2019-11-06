// REQUIRING MONGOOSE
var mongoose = require('mongoose');

// CREATING A SCHEMA CLASS USING MONGOOSE'S SCHEMA METHOD
var Schema = mongoose.Schema;

// CREATING THE GAME SCHEMA WITH OUR SCHEMA CLASS
var gameSchema = new Schema({

});

// CREATING THE GAME MODEL USING THE USERSCHEMA
var Game = mongoose.model('Game', gameSchema);

// EXPORTING THE GAME MODEL
module.exports = Game;