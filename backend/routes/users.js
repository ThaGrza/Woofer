const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { response, request } = require('express');


// New User
router.post('/register', async (req, res) => {
    try{
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name,
            dog: req.body.dog,
            bio: req.body.bio,
            age: req.body.age
        });
        user.save()
        .then((result) => {
            res.json({message: "user created, Success"})
        })
        .catch((error) => {
            res.json({message: "Error creating user", error})
        });
    })
    }catch(err){
        res.json({ message: err });
    }
});

// Find user by name
router.get('/user/:userName', async (req,res) => {
    try{
        const user = await User.find({ name: { $regex: req.params.userName }});
        res.json(user);
        console.log("omg a request!")
    }catch(err){
        res.json({ message: err });
    }
});
// Update User Name
router.patch('/user/:userId', async (req,res) => {
    try{
        const updateUserName = await User.updateOne(
            {_id: req.params.userId}, 
            {$set : {name: req.body.name}}
        );
        res.json(updateUserName);
    }catch(err){
        res.json({ message: err });
    }
});

// Delete User
router.delete('/user/:userId', async (req,res) => {
    try{
    const removeUser = await User.remove({ _id: req.params.userId })
    res.json(removeUser);
    }catch(err){
        res.json({ message: err });
    }
});

module.exports = router;