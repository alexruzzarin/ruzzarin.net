var api_user = process.env.sgUser || '',
    api_key = process.env.sgKey || '',
    prerenderToken = process.env.prerenderToken || '';

require('newrelic');

var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var sendgrid = require('sendgrid')(api_user, api_key);

var app = express();

app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('prerender-node').set('prerenderToken', prerenderToken));

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/partials', express.static(__dirname + '/public/partials'));
app.use('/images', express.static(__dirname + '/public/images'));

var router = express.Router();
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});
router.route('/contact')
    .post(function (req, res) {
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
    });

app.use('/api', router);

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Express server listening at http://%s:%s', host, port);
});