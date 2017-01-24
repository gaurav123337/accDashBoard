/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var http = require('http');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var routes = require('./routes');
var customers = require('./routes/customer');

var app = express();

app.set('port', (process.env.PORT || 4300));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//app.use('/', express.static(__dirname + '/../dist'));

app.use('/', express.static(__dirname + '/dist'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

var connection = require('express-myconnection');
var mysql = require('mysql');

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/
app.use(

    connection(mysql, {

        host: 'localhost',
        user: 'root',
        password: 'Cxps#321',
        database: 'sample'

    }, 'pool') //or single

);
console.log(connection, "connection");




// APIs
// select all


//app.get('/', routes.index);

// Catch all other routes and return the index file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.get('/list', function(req, res) {
    req.getConnection(function(err, connection) {

        var query = connection.query('SELECT * FROM customer', function(err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);                     
        });        
    });
});


app.post('/add',function(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(req.body, "BODY");
    req.getConnection(function(err, connection) {
        var data = {
            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone

        };
        var query = connection.query("INSERT INTO customer set ? ", data, function(err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);                
        });       
    });
});

app.get('/test', customers.test);
app.get('/customers', customers.list);
app.get('/customers/add', customers.add);
// app.post('/customers/add', customers.save);
// app.get('/customers/delete/:id', customers.delete_customer);
// app.get('/customers/edit/:id', customers.edit);
// app.post('/customers/edit/:id', customers.save_edit);



// all other routes are handled by Angular
app.get('/*', function(req, res) {
    console.log(path.join(__dirname, '/dist/index.html'),"__dirname");
    res.sendFile(path.join(__dirname, '/dist/index.html'));

});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});