const express = require('express');
const router = express.Router();

// Models
const Book = require("../models/Books");


/* GET books. */
router.post('/new', function (req, res, next) {
  const book = new Book({
    title: "Kitap",
    desc: "Tanım",
    tarih: [{ mess1: "Mersaj 1", mess2: "Mesaj 2" }]
  });

  book.save((err, data) => {
    if (err)
      console.log(err);
    console.log(data);
    try {
      // var ss=JSON.parse(data.JSON.parse);
      res.json(data);
    } catch (error) {
      console.log("res.json(data); hala çalışmıyor2");
    }

  });

  res.send('respond with a resource');
});

module.exports = router;