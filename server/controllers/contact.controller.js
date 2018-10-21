var bl = require('../data/bl');
let rows = "`fname`, `lname`, `phone`, `date`, `email`, `content`";
let tableName = "contact";
var nodemailer = require('nodemailer');

// CRUD


function saveANDsend(data, callback) {
    let date = new Date;
    let values = `'${data.fname}', '${data.lname}', ${data.phone}, '${date}', '${data.email}', '${data.content}'`;

    bl.dataFromCostumer.saveContactData(tableName, rows, values, function (err, done) {
        if (err) {
            callback(err);
            console.log(err);

        } else {
            sendAmail(data, date, function (emailerr, emailsuc) {
                if (emailerr) {
                    callback(emailerr);
                    console.log(emailerr);

                } else {
                    callback(null, emailsuc);

                }
            })

        }
    });



}

function sendAmail(data, date, callback) {
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
        subject: "הודעת 'צור קשר' חדשה התקבלה מהאתר",
        text: ` מאת: ${data.fname} ${data.lname}\r\n טלפון: ${data.phone}\r\n מייל: ${data.email}\r\n תוכן: ${data.content}`
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
module.exports.saveANDsend = saveANDsend;