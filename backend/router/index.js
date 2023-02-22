const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("from home router");
});

router.post('/register', (req, res) => {
    res.send("registered");
});



module.exports = router;
