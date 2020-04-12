var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/homeData");

router.get(config.swipers,function(req,res){
   
    res.send(homehot.swiperHome)
})
module.exports = router;