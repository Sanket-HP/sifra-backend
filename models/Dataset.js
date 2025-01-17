const mongoose = require('mongoose');

// Define the dataset schema
const DatasetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  file_url: {
    type: String, // URL to the dataset file
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Create a Dataset model
const Dataset = mongoose.model('Dataset', DatasetSchema);

module.exports = Dataset;
