const express = require('express');
const router = express.Router();

// Models
const Book = require("../models/Books");


/* GET books. */
router.post('/new', function (req, res, next) {
  const book = new Book({
    title: "Kitap",
    desc: "Tanım",
    email: "hmtsyrk@gmail.com",
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

router.get("/search", (req, res, next) => {
  Book.find({ published: true },"tarih", (err,data)=>{
    res.json(data);
  })
})

router.get("/all", (req, res, next) => {
  Book.find({  },"title", (err,data)=>{
    res.json(data);
  })
})

router.get("/searchOne", (req, res, next) => {
  // bulduğu ilk kaydı tek getiriyor
  Book.findOne({  },"title", (err,data)=>{
    res.json(data);
  })
})

router.get("/searchById", (req, res, next) => {
  // bulduğu ilk kaydı tek getiriyor
  Book.findById("5e5f7bc4f3c70c0491b9c30d","title", (err,data)=>{
    res.json(data);
  })
})

module.exports = router;