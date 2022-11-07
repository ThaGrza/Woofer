const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Find user
router.get('/user/:userId', async (req,res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({ message: err });
    }
})

// Create New User
router.post('/newUser', async (req, res) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        dog: req.body.dog,
        bio: req.body.bio,
        age: req.body.age
    });

    try{
    const savedUser = await user.save();
    res.json(savedUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;