var express = require('express');
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser');

app.set('view engine','html');
app.engine('html',hbs.__express);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var router = require('./routes/routes')(app);
app.listen('3000');