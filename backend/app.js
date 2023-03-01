const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;
const db = require('./config/mongoose');

const app = express();


// middlewares
app.use(express.json());
// use express router
app.use(require('./router/index'));

app.listen(PORT, () => {
    console.log("Server is Up on PORT", PORT);
})