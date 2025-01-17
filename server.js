const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Hello from Sifra Backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
