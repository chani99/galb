var contactCtrl = require('../controllers/order.controller.js');
var express = require('express');
let multer = require('multer');
let app = express();
var router = express.Router();
let fileUpload = require("express-fileupload");
let data;
let path = require("path");


//////////////////////////

// var storage =   multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, './uploads');
//     },
//     filename: function (req, file, callback) {
//       callback(null, file.fieldname + '-' + Date.now());
//     }
//   });
//   var upload = multer({ storage : storage }).array('userPhoto',10);
  
/////////////////////////
router.post('/',function(req,res){
        let contactContent = req.body;
    console.log(contactContent);
    contactCtrl.insertNewOrderToDB(req, function (err, done) {
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
    // upload(req,res,function(err) {
    //     console.log(req.body);
    //     console.log(req.files);
    //     if(err) {
    //         return res.end("Error uploading file.");
    //     }
    //     res.end("File is uploaded");
    // });
});

  
//get contact data
// router.post('/', function (req, res) {
//     let contactContent = req.body;
//     console.log(contactContent);
//     contactCtrl.insertNewOrderToDB(req, function (err, done) {
//         if (err) {
//             console.log(err);
//             res.end(JSON.stringify({
//                 done: false,
//                 why: err
//             }));
//         } else {
//             res.end(JSON.stringify({
//                 done: true
//             }));
//         }
//     });

// });



module.exports = router;