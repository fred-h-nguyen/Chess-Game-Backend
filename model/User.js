// REQUIRING MONGOOSE
var mongoose = require('mongoose');

// CREATING A SCHEMA CLASS USING MONGOOSE'S SCHEMA METHOD
var Schema = mongoose.Schema;

// CREATING THE USER SCHEMA WITH OUR SCHEMA CLASS
var userSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    }
});

// CREATING THE USER MODEL USING THE USERSCHEMA
var User = mongoose.model('User', userSchema);

// EXPORTING THE USER MODEL
module.exports = User;