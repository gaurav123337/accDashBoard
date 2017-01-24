/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
//var bodyParser = require('body-parser');

//var json = require('express-json');
//var urlencode = require('urlencode');

//var routes = require('./routes');

//load customers route
var customers = require('./routes/customer');
var app = express();

var connection = require('express-myconnection');
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.logger('dev'));
//app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());

//app.use(require('connect').logger('dev'));
//app.use(require('connect').json());
//app.use(require('connect').urlencoded());
//app.use(require('connect').methodOverride());


// parse application/x-www-form-urlencoded

//app.use(json());
//app.use(urlencode());

//app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});

// development only
if ('development' == app.get('env')) {
    //app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

// app.use(

//     connection(mysql, {

//         host: 'localhost',
//         user: 'root',
//         password: 'Cxps#321',
//         database: 'sample'

//     }, 'pool') //or single

// );

app.use(

    connection(mysql, {

        host: 'localhost',
        user: 'root',
        password: 'Cxps#321',
        database: 'sample'

    }) //or single

);



app.get('/', routes.index);

// Catch all other routes and return the index file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.get('/customers', customers.list);
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id', customers.save_edit);


//app.use(app.router);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});