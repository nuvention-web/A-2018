var http = require('http');
var env = require('require-env');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "verid.cbafpj4m1cpc.us-east-2.rds.amazonaws.com",
  user: "verid",
  password: "verid2018",
  database: "userdata"
});

app.use(bodyParser.urlencoded({
    extended: true
}));

con.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error11:");
            throw err;
        }
        else {
            console.log("Connection established.");
            //updateData();
        }
    });


app.get('/showData', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("In Connect Database");
    
        //var sql = "CREATE TABLE students (name VARCHAR(255), contact VARCHAR(255))";
        //var sql = "CREATE DATABASE iotpublicsafety"
        //var sql = "INSERT INTO students (name, contact) VALUES ?";
        var count = 3;
        //var sql = "Select * from students Limit " + count;
        var sql='';

          sql = "select * from userdata.new_table";

        //
        //var array = [];
        con.query(sql, function(err, rows, result) {
            if (err) throw err;
            console.log(rows);
            // getStudent =[];
            // var array = [];
            // for (var i = 0; i < rows.length; i++) {
            //     //array.push({name: rows[i].name, contact: rows[i].contact });
            //     console.log(rows[i]);
            //     var obj = {};
            //     obj.PID = rows[i].PID;
            //     obj.Timestamp = rows[i].Timestamp;
            //     obj.Name = rows[i].Name;
            //     obj.City = rows[i].City;
            //     obj.Request = rows[i].Request;
            //     console.log(rows[i].DID+" "+rows[i].Timestamp);
            //     console.log(obj);
            //     array.push(obj);
            //     console.log(array);
            // }
            // console.log("tetsd hsd kaslk sld "+array);
            // getStudent=array;
            // console.log("End"+getStudent);
            // console.log(JSON.stringify(getStudent));

        });
    //     res.type('json');
    //     res.send(JSON.stringify(getStudent));
    //     console.log("Response End"+getStudent);
    // res.end();
    res.write('Hello World!'); //write a response to the client
  res.end(); //end the response

});


app.listen(8000, function() {
    console.log('Waiting for the call');
});