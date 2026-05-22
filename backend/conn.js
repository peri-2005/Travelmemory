const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGO_URI;

mongoose.connect(URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB ERROR : '));

module.exports = { db, mongoose };
