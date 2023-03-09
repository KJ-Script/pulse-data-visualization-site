var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var cors = require("cors");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(bodyParser.json());

// Connect to the database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "health",
});

connection.connect();

app.get("/", function (req, res) {
  console.log(req.query, "the query");
  var b = req.query.blood;
  var h= req.query.heart;
  var n = req.query.username;
  var p= req.query.phone;
  var hi = req.query.history;
  var a= req.query.age;


  let post = {
    heart: 112,
    oxygen: 199,
    name: "Keti Yohannes",
    phone: 251939858566,
    history: "Blood Pressure",
    age: 21,
  };
  console.log(post, req);
  var query = connection.query(
    "INSERT INTO pulse SET ?",
    post,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
  console.log(query.sql);
  res.send("Data saved successfully");
});


//sends random response
app.get("/data", (req, res, next) => {
  connection.query(
    "SELECT heart, oxygen FROM pulse ORDER BY id DESC LIMIT 10",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    }
  );
});


//recives all sql data about the senspr and user from database
app.get("/get_data", (req, res, next) => {
  connection.query(
    "SELECT * FROM pulse",
    function(err, result, fields) {
      if(err) throw err;
      console.log("table Data: ", result)
      res.json(result)
    }
  )
  console.log("Data retrieved successfully")
})




app.post("/single_person_data", (req, res, next) => {
  console.log("leQuery: ", req.body)
  const number = req.body.number
  connection.query(
    "SELECT * FROM pulse WHERE phone=" + number, 
    function(err, result, fields) {
      if(err) throw err;
      console.log("sp data: ", result)
      res.json(result)
    }
  )
})


// uploads sensor data to sql server
app.get("/upload_sensor_data", (req, res, next) => {
  console.log(req.query);
  console.log(req.query, "the query");
  var b = req.query.blood;
  var h= req.query.heart;
  var n = req.query.username;
  var p= req.query.phone;
  var hi= req.query.history;
  var a= req.query.age;

  console.log(b, h, n, p, hi, a);
  let post = {
    heart: b,
    oxygen: h,
    name: n,
    phone: p,
    history: hi,
    age: a,
  };
  var query = connection.query(
    "INSERT INTO pulse SET ?",
    post,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
  console.log(query.sql);

  query = connection.query(
    "INSERT INTO pulse SET ?",
    post,
    function (err, result, fields) {
      if (err) throw err;
    }
  );
  console.log(query.sql);
  res.send("Data saved successfully");
});


//listens on port
app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
