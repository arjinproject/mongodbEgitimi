const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * type
 * default
 * required
 * unique
 */


const BookSchema = new Schema({
    title: {
        type: String,
        required: true // girilmesi zorunlu
    },
    email:{
        type: email,
        unique:true, // benzersiz olmalı
    },
    desc: String,
    tarih: [{ mess1: String, mess2: String }],
    published: {
        type: Boolean,
        default: false, // hiçbişey girilmez ise default olarak bu girilir.
    }
});

module.exports = mongoose.model("book", BookSchema);

// Şimdi route klasörüne gidip bu modeli kullanacağız