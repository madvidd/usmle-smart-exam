const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:12345678M@usmle.f86ia.mongodb.net/';  // Replace this with your MongoDB URI

let connection;

async function connectToDB() {
    if (!connection) {
        connection = mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
    return connection;
}

module.exports = connectToDB;
