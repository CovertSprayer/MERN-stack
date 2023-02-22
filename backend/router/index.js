const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send("from home router");
});

router.get('/showall', async (req, res) => {
    const user = await User.find({});
    res.json(user);
});

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    
    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(422).json({ error: "Plz fill the field properly" });
    }

    try {
        const userExist = await User.findOne({email:email});
        console.log(userExist);

        if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }

        const user = new User(req.body);
        await user.save();
        res.status(201).json({message: "User registration seccessfully"});  

    } catch (err) {
        console.log(err);
    }

});



module.exports = router;
