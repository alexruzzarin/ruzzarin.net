var api_user = process.env.sgUser || '',
    api_key = process.env.sgKey || '',
    prerenderToken = process.env.prerenderToken || '',
    cdnUrl = process.env.cdnUrl || false; //cdn.ruzzarin.net

require('newrelic');

var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var sendgrid = require('sendgrid')(api_user, api_key);
var ECT = require('ect');

var app = express();
var ectRenderer = ECT({watch: true, root: __dirname + '/views', ext: '.ect'});

app.disable('x-powered-by');

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.use(function (req, res, next) {
    if (req.hostname != 'localhost' && req.hostname != 'www.ruzzarin.net') {
        var redirectTo = req.protocol + '://www.ruzzarin.net' + req.originalUrl;
        res.redirect(301, redirectTo);
    }
    next();
});

app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('prerender-node').set('prerenderToken', prerenderToken));


app.use('/', express.static(__dirname + '/public/'));

app.use(function(req, res, next) {
    res.header('X-Frame-Options', 'DENY');
    next();
});

var apiRouter = express.Router();
apiRouter.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});
apiRouter.route('/contact')
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

app.use('/api', apiRouter);

app.get('/*', function (req, res) {
    var model = {
        env: process.env.NODE_ENV,
        cdnUrl: cdnUrl,
        name: "Alex Ruzzarin",
        title: "Alex Ruzzarin - Software Developer",
        description: "Programmer with degree in Analysis and Development of Information Systems. Professional and trainer certified by Microsoft. Crazy for technology, works with. Net, but is a fan of Ruby and JavaScript (and Node.Js).",
        image: (cdnUrl ? cdnUrl : "http://www.ruzzarin.net") + "/images/Alex-Ruzzarin.jpg",
        keywords: "HTML,CSS,JavaScript,.net,dotnet,node,nodejs,node.js,asp.net,aspnet",
        googlePlusUrl: "https://plus.google.com/+AlexRuzzarin/posts"
    };
    res.render('index', model);
});


var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Express server listening at http://%s:%s', host, port);
});