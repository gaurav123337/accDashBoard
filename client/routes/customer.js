/*
 * GET users listing.
 */

exports.test = function(req, res) {
    console.log("request " + req + "res ="+ res);
    console.log("test");
    req.getConnection(function(err, connection) {
        var query = connection.query('SELECT * FROM customer', function(err, rows) {
            if (err){
                console.log("Error Selecting : %s ", err);                            
            }
            res.send(rows);
        });        
    });

    
};

exports.list = function(req, res) {
    req.getConnection(function(err, connection) {
        var query = connection.query('SELECT * FROM customer', function(err, rows) {
            if (err){
                console.log("Error Selecting : %s ", err);                            
            }
            res.send(rows); 
        });               
    });

};

exports.add = function(req, res, next) {
    //res.render('add_customer', { page_title: "Add Customers - Node.js" });
    
    console.log(req,"req");
    res.send("Hello babes ..");
    // next(new Error('not implemented'));


    // var input = JSON.parse(JSON.stringify(req.body));
    // console.log(req.body, "BODY");
    // req.getConnection(function(err, connection) {
    //     var data = {
    //         name: input.name,
    //         address: input.address,
    //         email: input.email,
    //         phone: input.phone

    //     };
    //     var query = connection.query("INSERT INTO customer set ? ", data, function(err, rows) {

    //         if (err)
    //             console.log("Error Selecting : %s ", err);     
    //             res.send(rows);            
    //     });       
    // });
};

exports.edit = function(req, res) {

    var id = req.params.id;

    req.getConnection(function(err, connection) {

        var query = connection.query('SELECT * FROM customer WHERE id = ?', [id], function(err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            //res.render('edit_customer', { page_title: "Edit Customers - Node.js", data: rows });


        });

        //console.log(query.sql);
    });
};

/*Save the customer*/
exports.save = function(req, res) {
    //console.log(req, "REQ");
    //console.log(res, "res")
    var input = JSON.parse(JSON.stringify(req.body));
    // console.log(req.headers, "HEADER");
    console.log(req.body, "BODY");

    console.log(input, "INPUT");
    console.log("In save");
    // req.getConnection(function(err, connection) {

    //     var data = {
    //         name: input.name,
    //         address: input.address,
    //         email: input.email,
    //         phone: input.phone

    //     };


    //     console.log(data, "data");
    //     var query = connection.query("INSERT INTO customer set ? ", data, function(err, rows) {
    //         console.log("ROWS", rows);
    //         if (err)
    //             console.log("Error inserting : %s ", err);

    //         //res.redirect('/customers');

    //     });

    //     // console.log(query.sql); get raw query

    // });
};

exports.save_edit = function(req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    req.getConnection(function(err, connection) {

        var data = {

            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone

        };

        connection.query("UPDATE customer set ? WHERE id = ? ", [data, id], function(err, rows) {

            if (err)
                console.log("Error Updating : %s ", err);

            //res.redirect('/customers');

        });

    });
};


exports.delete_customer = function(req, res) {

    var id = req.params.id;

    req.getConnection(function(err, connection) {

        connection.query("DELETE FROM customer  WHERE id = ? ", [id], function(err, rows) {

            if (err)
                console.log("Error deleting : %s ", err);

            //res.redirect('/customers');

        });

    });
};