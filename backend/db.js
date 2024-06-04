// backend/db.js
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/paytm")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// create a mode for balance schema

const accountSchema= new mongoose.model({
    userId:{
        type: mongoose.Schema.Types.ObjectId, // Reference to user model
        ref:'User',
        required: true,
    },
    balance:{
type: Number,
required: true,
    }
})
const Account= mongoose.model('Account',accountSchema);

module.exports = {
	User,Account,
};