const express = require("express");
const router = express.Router();
const { getLink , 
        getLinks, 
        createLink} = require('../Controller/linkController');

router

.post(   "/", createLink)
.get(    "/", getLinks)
.get(    "/:id", getLink)

module.exports = router;