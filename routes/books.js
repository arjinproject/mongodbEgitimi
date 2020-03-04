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
  Book.find({ published: true }, "tarih", (err, data) => {
    res.json(data);
  })
});

router.get("/all", (req, res, next) => {
  Book.find({}, "title", (err, data) => {
    res.json(data);
  })
});

router.get("/searchOne", (req, res, next) => {
  // bulduğu ilk kaydı tek getiriyor
  Book.findOne({}, "title", (err, data) => {
    res.json(data);
  })
});

router.get("/searchById", (req, res, next) => {
  Book.findById("5e5f7bc4f3c70c0491b9c30d", "title", (err, data) => {
    res.json(data);
  })
});

// update
router.put("/update", (req, res) => {
  // published alanı false olanı true yap
  Book.update({ published: false }, { published: true }, { upsert: true }, (err, data) => {
    res.json(data);
  })
});

router.put("/updateById", (req, res) => {
  // id bazlı güncelleme
  Book.findByIdAndUpdate("5e5f7da4eeba7d04f2d0c0e7", { published: true, title: "Bu id güncellendi" }, (err, data) => {
    res.json(data);
  })
});

// delete
router.delete("/delete", (req, res) => {
  // published: false olanları sil
  Book.remove({ published: false }, (err, data) => {
    res.json(data);
  })
});

router.delete("/deleteById", (req, res) => {
  // önce datayı bulup sonra siliyoruz
  Book.findById("5e5f7ed624c09e05399fd899", (err, book) => {
    book.remove((err, data) => {
      res.json(data);
    })
  })
});

router.delete("/deleteOne", (req, res) => {
  // önce datayı bulup sonra direk siliyoruz. Sadece bir tane siliyor
  Book.findOneAndRemove({ published: true }, (err, book) => {
    res.json(book);
  })
});

// sort
router.get("/sort", (req, res, next) => {
  Book.find({}, (err, data) => {
    res.json(data);
    // 1 küçükten büyüğe sırala demek
  }).sort({ "title": -1})
});

module.exports = router;