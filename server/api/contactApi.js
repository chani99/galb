var contactCtrl = require('../controllers/contact.controller.js');
var express = require('express');
var router = express.Router();
let data;



//get contact data
router.post('/', function (req, res) {
    let contactContent = req.body;
    console.log(contactContent);
    contactCtrl.saveANDsend(contactContent, function (err, done) {
        if (err) {
            console.log(err);
            res.end(JSON.stringify({
                done: false,
                why: err
            }));
        } else {
            res.end(JSON.stringify({
                done: true
            }));
        }
    });

});



module.exports = router;