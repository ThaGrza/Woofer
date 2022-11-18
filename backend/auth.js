const { request } = require('express');
const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try{
        const token = await request.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(
            token,
            "RANDOM-TOKEN"
        );
        const user = await decodedToken;
        request.user = user;

        next();
    }
    catch(err){
        res.status(401).json({
            err: new Error("Invalid request"),
        });
    }
}