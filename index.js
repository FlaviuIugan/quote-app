const express = require("express");
const app = express();
const route = require("./route/routes");
const bodyParser = require("body-parser");

app.use(express.static(__dirname  + "/public"));
app.use(express.static(__dirname + "/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res) =>{
  res.sendFile("index.html");
});

app.use("/api/quote", route);


app.listen("3000", function(){

  console.log("Sever is running");
})