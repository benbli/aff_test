var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var supermodel = require('./app/routes/supermodel')();

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };
var mongoPath = process.env.MONGODB_URI || 'mongodb://localhost/supermodeldatabase';
mongoose.connect(mongoPath, options);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//Log with Morgan
app.use(morgan('dev'));
//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

//Static files
app.use(express.static(__dirname + '/public'));

app.route('/supermodel')
	.post(supermodel.post)
	.get(supermodel.getAll);
app.route('/supermodel/:id')
	.get(supermodel.getOne);

app.listen(port);
console.log('listening on port ' + port);
