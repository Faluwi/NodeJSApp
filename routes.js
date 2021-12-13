var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    console.log("Hello i am startpage");
    res.render("index");
});

module.exports = router;