const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req,res) => {
    db.Quote.find()
      .then( quotes => res.json(quotes))
      .catch(error => res.send(error));
});

router.post("/", (req,res) =>{
  db.Quote.create(req.body)
    .then(newQuote => res.status(200).json(newQuote))
    .catch(err => res.send(err))
})

router.delete("/:id", (req,res)=>{
  db.Quote.remove({_id: req.params.id})
    .then( () => res.json({message: "Qoute deleted"}))
    .catch(err => res.send(err));
});






module.exports = router;