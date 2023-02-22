const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const URI = process.env.DATABASE;

mongoose.set('strictQuery', false);

const db = mongoose.connect(URI)
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => console.log('Not connected to DB ', err));


module.exports = db;




