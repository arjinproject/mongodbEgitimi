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
        required: true, // girilmesi zorunlu
        maxlength: [20, "`{PATH}` alanına fazla 20 karakter girilebilir"],
    },
    email:{
        type: String,
        unique:true, // benzersiz olmalı
    },
    desc: String,
    tarih: [{ mess1: String, mess2: String }],
    published: {
        type: Boolean,
        default: true, // hiçbişey girilmez ise default olarak bu girilir.
    }
});

module.exports = mongoose.model("book", BookSchema);

// Şimdi route klasörüne gidip bu modeli kullanacağız