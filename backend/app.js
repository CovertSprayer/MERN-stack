const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;
const db = require('./config/mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send("Working Fine");
});

app.listen(PORT, () => {
    console.log("Server is Up");
})