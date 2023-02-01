const { request } = require("express");
const express = require("express");
const router = express.Router();
const { 
    signup,
    login,
    getUsers, 
    getUser , 
    getAdmin , 
} = require('../Controller/usersController');


router
.get("/:id", getUser)
.get("/", getAdmin)
.get("/", getUsers)
.post ('/' , signup)
.post ('/' , login)

module.exports = router;