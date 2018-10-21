let paperCtrl = require('../controllers/paperCtrl');

var express = require("express");
var router = express.Router();
let path = require("path");


router.use("/contact", require("./contactApi.js"));
router.use("/order", require("./orderApi.js"));


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});


router.get('/book', function (req, res) {
    paperCtrl.getlastpaper(req.query.params, function (err, num) {
        if (err) {
            console.log(err);
        }
        console.log(`last ${req.query.params} is ${JSON.stringify(num)}`);
        res.end(JSON.stringify(num));



    });

    console.log('book was enterd');

});


module.exports = router;