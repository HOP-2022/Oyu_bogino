const { request, response } = require("express");
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'placeholder_secret'


module.exports.auth = (request , response , next) => {
    try{
        let user
        let token = request.header.authorization;
        if(token){
            token = token.split(' ')[1],
            user = jwt.verify(token , SECRET_KEY),
            console.log(user)
            request.userId = user.id
            request.email = user.email
            next();
        }else{
            response.status(401).json({message:"not auth"})
        }
    }catch(error){
        console.log(error)
        response.status(401).json({message:"not authorization"})
    }
}
