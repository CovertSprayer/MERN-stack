const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

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
        const userExist = await User.findOne({ email: email });
        console.log(userExist);

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Passoword not matching" });
        }
        else {
            const user = new User(req.body);
            await user.save(); // ye return karega user lekin string mei
            res.status(201).json({ message: "User registration seccessfully" });
        }

    } catch (err) {
        console.log(err);
    }

});


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);
    if (!email || !password) {
        return res.json({ error: "Invalid Details" });
    }

    const user = await User.findOne({ email: email }); // ek he user milega, find() -> array of user dega
    // console.log(typeof(user[0].password));
    if (!user) {
        return res.json({ error: "User doesn't exist" });
    }

    const checkPass = await bcrypt.compare(password, user.password); // returns true or false
    if (!checkPass) {
        return res.json({ error: "Invalid Details" });
    }
    else {
        return res.json({ mesasge: "SignIn successfully!!" });
    }
});



module.exports = router;
