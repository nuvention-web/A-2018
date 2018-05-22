const express = require('express');
var http = require('http');
var env = require('require-env');
//var express = require('express');
var bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
var getStudent;
const port = process.env.PORT;


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



    app.get('/api/showData', function(req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      console.log("In Connect Database");
      
         var count = 3;
          //var sql = "Select * from students Limit " + count;
          var sql='';
  
            sql = "select * from userdata.new_table";
  
          //
          //var array = [];
          con.query(sql, function(err, rows, result) {
            if (err) throw err;
            console.log(rows);
            var array = [];
            for (var i = 0; i < rows.length; i++) {
                //array.push({name: rows[i].name, contact: rows[i].contact });
                console.log(rows[i]);
                var obj = {};
                obj.user_id = rows[i].user_id;
                obj.first_name = rows[i].first_name;
                obj.last_name = rows[i].last_name;
                obj.password = rows[i].password;
                console.log(obj);
                array.push(obj);
                console.log(array);
            }
            console.log("tetsd hsd kaslk sld "+array);
            getStudent=array;

        });
        res.type('json');
        res.send(JSON.stringify(getStudent));
        console.log("Response End"+getStudent);
    res.end();
  });   



app.get('/api/hello', (req, res) => {
  res.send({ USERID: '1' ,COMPANYNNAME: 'Delta Corp', FROMDATE: '2015-04-01T00:00:00.0000000', TODATE: '2018-01-01T00:00:00.0000000', USERPOSITION: 'Marketing Analyst', IFVERIFIED: 'True'});
});

app.get('/api/getExperienceCount', (req, res) => {
  res.send({exp: 2});
});

app.listen(port, () => console.log(`Listening on port ${port}`));