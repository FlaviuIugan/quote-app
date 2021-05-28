const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    name: {
      type: String,
      required: "Name cannot be blank"
    },
    author: {
      type: String,
      required: "Name cannot be blank"
    },
    created_data: {
      type: Date,
      default: Date.now()
    }
});


const Quote = mongoose.model("quote", quoteSchema);

module.exports = Quote;