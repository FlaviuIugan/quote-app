const mongoose = require("mongoose");

mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/quote-api", {
  useUnifiedTopology: true 
});

mongoose.Promise = Promise;

module.exports.Quote = require("./qoutes");