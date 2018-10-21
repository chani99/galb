
var bl = require('../data/bl');
let rows = " `date`, `fname`, `lname`, `email`, `phone`, `location`, `content`, `remarks`, `size`, `shows`, `images_folder`";
let tableName = "ad_order";
var nodemailer = require('nodemailer');
var express = require('express');
var fs = require('fs');
var mkdirp = require('mkdirp');




function insertNewOrderToDB(req, callback) {
    organizeDataForDB(req.body, function (order) {
        let files = null;
        if (req.files) {
            files = req.files['files[]'];
        }
        sendAmail(order, files, function (emailerr, emailsuc) { //send email to system
            if (emailerr) {
                callback("צורף קובץ לא חוקי");
                console.log(emailerr); // if error stop everything
            } else { //save files and db
                if (files) { //check if the client sent a file, and if - save it and then update
                    saveFile(files, function (fileErr, imagesFolder) {
                        if (imagesFolder) order.images = imagesFolder;
                    });
                }
                saveOrderInDB(order, function (dbErr, wasdone) {
                    if (dbErr) callback(dbErr);
                    else callback(null, wasdone);
                });

            }
        });

    });
}


//saves order in db
function saveOrderInDB(order, callback) {
    let data = order;
    let values = `'${data.date}', '${data.fname}', '${data.lname}', '${data.email}', ${data.phone}, '${data.location}', '${data.content}', '${data.remarks}', '${data.size}', '${data.shows}', '${data.images}'`;
    bl.dataFromCostumer.saveContactData(tableName, rows, values, function (err, done) {
        if (err) {
            callback(err);
            console.log(err);

        } else {
            callback(null, done);
        }

    });
}


//orgenize shosw from array object to string - to send by mail
function stringShow(allShows) {
    let stringShows = "";
    if (allShows) {
        let shows = JSON.parse(allShows);

        for (var i = 0; i < shows.length; i++) {
            stringShows += "עיתון: " + shows[i].type + " = " + shows[i].shows + " מופעים.\r\n"
        }
    }
    return (stringShows);
}


//send email with order to galb
function sendAmail(data, files, callback) {
    //create attacments
    let attached_images = [];
    data.shows = stringShow(data.shows);

    // var dir = './server/uploads/' + data.images;

    if (files) {
        if (files.length) {
            for (var i = 0; i < files.length; i++) {
                attached_images.push({
                    contentType: files[i].mimetype,
                    fileName: files[i].name,
                    content: files[i].data,
                    encoding: files[i].encoding
                });
            }
        } else {
            attached_images.push({
                contentType: files.mimetype,
                fileName: files.name,
                content: files.data,
                encoding: files.encoding
            });
        }
    }
    //send mail to gb mail

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'galb.vip@gmail.com',
            pass: 'blagblag'
        }
    });

    var mailOptions = {
        from: data.email,
        to: 'galb.vip@gmail.com',
        subject: "הודעת 'הזמנת פרסום' חדשה התקבלה מהאתר",
        text: `\r\nמאת: ${data.fname} ${data.lname}\r\n
        טלפון: ${data.phone}\r\n
        מייל: ${data.email}\r\n
        ___________________________________\r\n
        תוכן: ${data.content}\r\n
        הערות: ${data.remarks}\r\n
        __________________________________\r\n
        גודל: ${data.size}\r\n
        מיקום: ${data.location}\r\n
        מופעים: ${data.shows}\r\n`,
        attachments: attached_images
    };





    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            callback(error)
            console.log(error);
        } else {
            callback(null, 'Email sent: ' + info.response);
            console.log('Email sent: ' + info.response);
        }
    });

}


function saveFile(file, callback) {
    let date = Date.now(); //name for a folder for images
    let error = false; //check if were errors

    var dir = './server/uploads/' + date;
    mkdirp(dir, function (err) {});

    if (file.length) {
        for (var i = 0; i < file.length; i++) {
            let sampleFile = file[i];
            let filename = sampleFile.name;
            sampleFile.mv(dir + '/' + filename, function (err) {
                if (err) error = "status(500).send(err)";

            });
        }

    } else {
        let filename = file.name;
        file.mv(dir + '/' + filename, function (err) {
            if (err) error = "status(500).send(err)";

        });
    }

    if (error) {
        callback("status(500).send(err)");

    } else {
        callback(null, date);
    }


}


let organizeDataForDB = function (data, callback) {
    var order = {};

    order.date = new Date;
    if (data.fname) order.fname = data.fname;
    if (data.lname) order.lname = data.lname;
    if (data.email) order.email = data.email;
    if (data.phone) order.phone = data.phone;
    if (data.location) order.location = data.location;
    if (data.addContent) order.content = data.addContent;
    if (data.remarks) order.remarks = data.remarks;
    if (data.size) order.size = data.size;
    if (data.shows) order.shows = data.shows;
    if (data.images) order.images = data.images;
    callback(order);

}

module.exports.insertNewOrderToDB = insertNewOrderToDB;