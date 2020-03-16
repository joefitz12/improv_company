//API Routes//
var express = require('express');
var nodemailer = require('nodemailer');

module.exports = function (app) {

    //POST Routes
    app.post("/api/message", function (req, res) {
        console.log(req.body);
        res.json({okay: "okay"});

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'artistjournalapp@gmail.com',
                pass: 'eCXRuoaHLyynHyWk3awzFtvN'
            }
        });

        let mailOptions = {
            from: 'artistJournalApp@gmail.com',
            to: 'jefitzpa@gmail.com',
            subject: 'New Message from Contact Form',
            text: 'New message from: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message
        };

        console.log(mailOptions);

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } 
            else {
                console.log('Email sent: ' + info.response);
            }
        }); 
    });

};
