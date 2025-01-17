const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    enum: ['student', 'data_scientist', 'other'], // Example enum for designation
    required: true
  },
  company_name: {
    type: String,
    default: ''
  },
  school_name: {
    type: String,
    default: ''
  },
  profile_picture: {
    type: String, // URL or path to profile picture
    default: ''
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Create a User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
