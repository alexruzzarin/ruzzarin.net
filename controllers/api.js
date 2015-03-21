/**
 * Created by Alex on 3/21/2015.
 */
'use strict';

var config = require('../config/config');
var sendgrid = require('sendgrid')(config.sendgrid.user, config.sendgrid.key);

exports.postContact = function (req, res) {
    var email = new sendgrid.Email({
        to: 'alex@ruzzarin.net',
        from: 'contact@ruzzarin.net',
        fromname: req.body.name,
        replyto: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    });

    console.log('Form: ' + req.body.name);

    sendgrid.send(email, function (err, json) {
        if (err) {
            console.error(err);
        }
        console.log(json);

        res.json({success: true});
    });
};