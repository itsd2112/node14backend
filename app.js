const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./src/routes/index");

const app = express();

//connection to mongodb
mongoose.connect('mongodb://localhost/my-ways-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use("/", routes);


//connect server
const server = app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});