const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require("../auth");

//  * New User
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
// * Login User
router.post('/login', (req,res) => {
    User.findOne({email: req.body.email })
    .then((user => {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck => {
            if(!passwordCheck) {
                return res.status(400).send({
                    message: "Incorrect Password", err
                });
            }
            const token = jwt.sign(
                {
                    userId: user._id,
                    userEmail: user.email
                },
                "RANDOM-TOKEN",
                {expiresIn: "24h"}
            );

            res.status(200).send({
                message: "login success",
                email: user.email,
                token
            });
        }))
        .catch((err) => {
            res.status(400).send({
                message: "Incorrect Password", err
            });
        });
    }))
    .catch((err) => {
        console.log(err)
        res.status(404).send({
            message: "Email not found", err
        });
    });
});

//! auth
// * Find user by name
router.get('/user/:userName', async (req,res) => {
    try{
        const user = await User.find({ name: { $regex: req.params.userName }});
        res.json(user);
        console.log("omg a request!")
    }catch(err){
        res.json({ message: err });
        console.log("NOT AUTHORIZED");
    }
});

// ! change Update User Name import auth.js and pass it in as param
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

// ! Delete User import auth.js and pass it in as param
router.delete('/user/:userId', async (req,res) => {
    try{
    const removeUser = await User.remove({ _id: req.params.userId })
    res.json(removeUser);
    }catch(err){
        res.json({ message: err });
    }
});

module.exports = router;