const express = require("express");
const router = express.Router();
const { getLink , 
        getLinks, 
        createLink,
        hashLink,
        getPopulate
} = require('../Controller/linkController');

const {auth} = require("../middleware/auth")



router
.post("/", auth, hashLink)
.post("/", auth, createLink)
.get( "/", auth, getPopulate)
.get( "/", auth, getLinks)
.get( "/:id", auth, getLink)

module.exports = router;